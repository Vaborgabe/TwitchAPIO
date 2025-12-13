export default {
    generateUrl: (Parameters: {
        client_id: string;
        force_verify?: boolean;
        redirect_uri: string;
        scope:
    }) => {
        const baseUrl = "https://id.twitch.tv/oauth2/authorize";
    }
}