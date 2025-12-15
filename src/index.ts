import auth from "./auth/index.js";

export default class TwitchAPIO {
    clientId: string;
    clientSecret: string | undefined;

    constructor(clientId: string, clientSecret?: string) {
        this.clientId = clientId;
        if (clientSecret) this.clientSecret = clientSecret;
    }
}
export const TwitchApi = { auth };
