import axios from "axios";
import type express from "express";
import AuthCodeToken from "../AuthCodeToken.js";
import { urlEncodeObject } from "../util.js";
import type { Scope } from "./scopes.js";

const authCode = {
    generateUrl: (parameters: {
        client_id: string;
        force_verify?: boolean;
        redirect_uri: string;
        scopes: Scope[];
        state?: string;
    }) => {
        const baseUrl = 'https://id.twitch.tv/oauth2/authorize';
        const dp: {[k: string]: unknown} = parameters;
        dp.scopes = parameters.scopes.join(" ");
        dp.response_type = "code";

        const url = `${baseUrl}?${urlEncodeObject(dp)}`;
        return url;
    },

    tokenFromCode: (clientId: string, clientSecret: string, code: string, redirectUri: string, callback: (token: AuthCodeToken | null, error: unknown) => void) => {
        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("client_secret", clientSecret);
        params.append("code", code);
        params.append("grant_type", "authorization_code");
        params.append("redirect_uri", redirectUri);

        return axios.post<CodeAuthResponse>('https://id.twitch.tv/oauth2/token', params).then((res) => {
            callback(new AuthCodeToken(clientId, clientSecret, res.data.access_token, res.data.token_type, res.data.refresh_token, res.data.scope), null);
        }).catch((error) => {
            callback(null, error);
        });
    },

    tokenFromExpress: (req: express.Request, res: express.Response, clientId: string, clientSecret: string, redirectUri: string, next: (token: AuthCodeToken | null, error: unknown, req: express.Request, res: express.Response) => void)=> {
        if(req.query.error) {
            next(null, req.query.error_description ?? req.query.error, req, res);
            return;
        }
        const code = req.query.code as string;
        authCode.tokenFromCode(clientId, clientSecret, code, redirectUri, (token, error) => {
            next(token, error, req, res);
        });
    }
}

export default authCode;

export type CodeAuthResponse = {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: Scope[];
    token_type: string;
}