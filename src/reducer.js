export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing....
   // token: "BQArbZZd2aDPy9G7Ci0dJvlTGlpEvOcB8wfcbiudAecJtraMqsYthyemD6-Z_5IrUyaWFIw2ZMEOLDTAIozc6MrPo220DAGqz3IpzOSHjVBAXQ_s1iwSGUMWk90mgCMiVAQ_2QcF45wkdxPF3IDAzIM9P2qdKgk8GiaP_FaWBEo0LPAc"
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly : action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;