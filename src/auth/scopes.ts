export type ScopesObject = { [key: string]: ScopesObject | Scope };
//Object to hold all scopes, nested based on :'s
const scopes: ScopesObject = {
    analytics: {
        read: {
            extensions: "analytics:read:extensions",
            games: "analytics:read:games",
        }
    },
    bits: {
        read: "bits:read"
    },
    channel: {
        bot: "channel:bot",
        manage: {
            ads: "channel:manage:ads",
            broadcast: "channel:manage:broadcast",
            clips: "channel:manage:clips",
            extensions: "channel:manage:extensions",
            guest_star: "channel:manage:guest_star",
            moderators: "channel:manage:moderators",
            polls: "channel:manage:polls",
            predictions: "channel:manage:predictions",
            raids: "channel:manage:raids",
            redemptions: "channel:manage:redemptions",
            schedule: "channel:manage:schedule",
            videos: "channel:manage:videos",
            vips: "channel:manage:vips",
        },
        read: {
            ads: "channel:read:ads",
            charity: "channel:read:charity",
            editors: "channel:read:editors",
            goals: "channel:read:goals",
            guest_star: "channel:read:guest_star",
            hype_train: "channel:read:hype_train",
            polls: "channel:read:polls",
            predictions: "channel:read:predictions",
            redemptions: "channel:read:redemptions",
            stream_key: "channel:read:stream_key",
            subscriptions: "channel:read:subscriptions",
            vips: "channel:read:vips",
        },
        edit: {
            commercial: "channel:edit:commercial"
        },
        moderate: "channel:moderate"
    },
    clips: {
        edit: "clips:edit"
    },
    editor: {
        manage: {
            clips: "editor:manage:clips"
        }
    },
    moderation: {
        read: {
            read: "moderation:read",
            automod_settings: "moderator:read:automod_settings",
            banned_users: "moderator:read:banned_users",
            blocked_terms: "moderator:read:blocked_terms",
            chat_messages: "moderator:read:chat_messages",
            chat_settings: "moderator:read:chat_settings",
            chatters: "moderator:read:chatters",
            followers: "moderator:read:followers",
            guest_star: "moderator:read:guest_star",
            moderators: "moderator:read:moderators",
            shield_mode: "moderator:read:shield_mode",
            shoutouts: "moderator:read:shoutouts",
            suspicious_users: "moderator:read:suspicious_users",
            unban_requests: "moderator:read:unban_requests",
            vips: "moderator:read:vips",
            warnings: "moderator:read:warnings",
        },
        manage: {
            announcements: "moderator:manage:announcements",
            automod: "moderator:manage:automod",
            automod_settings: "moderator:manage:automod_settings",
            banned_users: "moderator:manage:banned_users",
            blocked_terms: "moderator:manage:blocked_terms",
            chat_messages: "moderator:manage:chat_messages",
            chat_settings: "moderator:manage:chat_settings",
            guest_star: "moderator:manage:guest_star",
            shield_mode: "moderator:manage:shield_mode",
            shoutouts: "moderator:manage:shoutouts",
            unban_requests: "moderator:manage:unban_requests",
            warnings: "moderator:manage:warnings",
        }
    },
    user: {
        bot: "user:bot",
        edit: {
            edit: "user:edit",
            broadcast: "user:edit:broadcast",
        },
        read: {
            blocked_users: "user:read:blocked_users",
            broadcast: "user:read:broadcast",
            chat: "user:read:chat",
            email: "user:read:email",
            emotes: "user:read:emotes",
            follows: "user:read:follows",
            moderated_channels: "user:read:moderated_channels",
            subscriptions: "user:read:subscriptions",
            whispers: "user:read:whispers",
        },
        manage: {
            blocked_users: "user:manage:blocked_users",
            chat_color: "user:manage:chat_color",
            whispers: "user:manage:whispers",
        },
        write: {
            chat: "user:write:chat"
        }
    },
    chat: {
        edit: "chat:edit",
        read: "chat:read"
    },
    whispers: {
        read: "whispers:read"
    }
};

export default scopes;

export type Scope =
"analytics:read:extensions" | 
"analytics:read:games" |
"bits:read" |
"channel:bot" |
"channel:manage:ads" |
"channel:read:ads" |
"channel:manage:broadcast" |
"channel:read:charity" |
"channel:manage:clips" |
"channel:edit:commercial" |
"channel:read:editors" |
"channel:manage:extensions" |
"channel:read:goals" |
"channel:read:guest_star" |
"channel:manage:guest_star" |
"channel:read:hype_train" |
"channel:manage:moderators" |
"channel:read:polls" |
"channel:manage:polls" |
"channel:read:predictions" |
"channel:manage:predictions" |
"channel:manage:raids" |
"channel:read:redemptions" |
"channel:manage:redemptions" |
"channel:manage:schedule" |
"channel:read:stream_key" |
"channel:read:subscriptions" |
"channel:manage:videos" |
"channel:read:vips" |
"channel:manage:vips" |
"channel:moderate" | 
"clips:edit" |
"editor:manage:clips" |
"moderation:read" |
"moderator:manage:announcements" |
"moderator:manage:automod" |
"moderator:read:automod_settings" |
"moderator:manage:automod_settings" |
"moderator:read:banned_users" |
"moderator:manage:banned_users" |
"moderator:read:blocked_terms" |
"moderator:read:chat_messages" |
"moderator:manage:blocked_terms" |
"moderator:manage:chat_messages" |
"moderator:read:chat_settings" |
"moderator:manage:chat_settings" |
"moderator:read:chatters" |
"moderator:read:followers" |
"moderator:read:guest_star" |
"moderator:manage:guest_star" |
"moderator:read:moderators" |
"moderator:read:shield_mode" |
"moderator:manage:shield_mode" |
"moderator:read:shoutouts" |
"moderator:manage:shoutouts" |
"moderator:read:suspicious_users" |
"moderator:read:unban_requests" |
"moderator:manage:unban_requests" |
"moderator:read:vips" |
"moderator:read:warnings" |
"moderator:manage:warnings" |
"user:bot" |
"user:edit" |
"user:edit:broadcast" |
"user:read:blocked_users" |
"user:manage:blocked_users" |
"user:read:broadcast" |
"user:read:chat" |
"user:manage:chat_color" |
"user:read:email" |
"user:read:emotes" |
"user:read:follows" |
"user:read:moderated_channels" |
"user:read:subscriptions" |
"user:read:whispers" |
"user:manage:whispers" |
"user:write:chat" |
"chat:edit" |
"chat:read" |
"whispers:read";