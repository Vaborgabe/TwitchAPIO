import axios from "axios";
import type { CodeAuthResponse } from "./auth/authCode.js";
import type { Scope } from "./auth/scopes.js";

export default class AuthCodeToken {
    clientId: string;
    clientSecret: string
    accessToken: string | null;
    tokenType: string | null
    refreshToken: string | null;
    scopes: Scope[] = [];

    constructor(clientId: string, clientSecret: string, accessToken?: string, tokenType?: string, refreshToken?: string, scopes?: Scope[]) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.accessToken = accessToken ?? null;
        this.tokenType = tokenType ?? null;
        this.refreshToken = refreshToken ?? null;
        if (scopes) this.scopes = scopes;
    }

    tokenFromCode(code: string, redirectUri: string): void {
        const params = new URLSearchParams();
        params.append("client_id", this.clientId);
        params.append("client_secret", this.clientSecret);
        params.append("code", code);
        params.append("grant_type", "authorization_code");
        params.append("redirect_uri", redirectUri);

        axios.post<CodeAuthResponse>('https://id.twitch.tv/oauth2/token', params).then((res) => {
            this.accessToken = res.data.access_token;
            this.tokenType = res.data.token_type;
            this.refreshToken = res.data.refresh_token;
            this.scopes = res.data.scope;
        });
    }

    refresh(): Promise<void> {
        const params = new URLSearchParams();
        params.append("client_id", this.clientId);
        params.append("client_secret", this.clientSecret);
        params.append("grant_type", "refresh_token");
        params.append("refresh_token", this.refreshToken!);

        return axios.post<CodeAuthResponse>('https://id.twitch.tv/oauth2/token', params).then((res) => {
            this.accessToken = res.data.access_token;
            this.tokenType = res.data.token_type;
            this.refreshToken = res.data.refresh_token;
            this.scopes = res.data.scope;
        });
    }
}