import axios from "axios";

export default class AppToken {
    clientId: string;
    clientSecret: string;
    accessToken: string | null;
    tokenType: string | null;

    constructor(clientId: string, clientSecret: string, accessToken?: string, tokenType?: string) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.accessToken = accessToken ?? null;
        this.tokenType = tokenType ?? null;
    }

    getToken(): void {
        const params = new URLSearchParams();
        params.append("client_id", this.clientId);
        params.append("client_secret", this.clientSecret);
        params.append("grant_type", "client_credentials");

        axios.post('https://id.twitch.tv/oauth2/token', params).catch(e => {
            console.error(e.response?.data ?? e.message);
            throw e;
        }).then(res => {
            this.accessToken = res.data.access_token;
            this.tokenType = res.data.token_type;
        });
    }
}