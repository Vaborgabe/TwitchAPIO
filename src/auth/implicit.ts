import { urlEncodeObject } from "../util.js";
import type { Scope } from "./scopes.js";

export default {
    generateUrl: (Parameters: {
        client_id: string;
        force_verify?: boolean;
        redirect_uri: string;
        scopes: Scope[];
        state?: string;
    }) => {
        const baseUrl = "https://id.twitch.tv/oauth2/authorize";
        const dp: {[k: string]: unknown} = Parameters;
        dp.scopes = Parameters.scopes.join(" ");
        dp.response_type = "token";
        
        const url = `${baseUrl}?${urlEncodeObject(dp)}`;
        return url;
    }
}