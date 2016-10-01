export default {
    pendingTask : 0,
    notification : {
        message: null,
        level: null
    },
    auth : {
        authenticated: false,
        token: ''
    },
    modal : false,
    user : {
        name: '',
        email: '',
        picture: ''
    },
    shortner : {
        shortner: null,
        input: ''
    },
    torrent : {
        search: [],
        input: ''
    },
    ws : {
        torrents: '',
        onlineUsers: 0,
        filesDownloading: 0,
        uploads: '',
        chats: []
    }
};
