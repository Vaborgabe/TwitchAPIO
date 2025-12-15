import axios from "axios";
import AppToken from "../AppToken.js";

export default (clientId: string, clientSecret: string, callback: (twitchApp: AppToken, error: unknown) => void): void => {
    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);
    params.append("grant_type", "client_credentials");
    let err: unknown;
    let t;

    axios.post('https://id.twitch.tv/oauth2/token', params).catch(e => {
        console.error(e.response?.data ?? e.message);
        err = e;
        throw e;
    }).then(res => {
        t = new AppToken(clientId, clientSecret, res.data.access_token, res.data.token_type);
    }).finally(() => {
        callback(t!, err);
    });
}