import { actions } from "../actions/MediaActions";

const initialState = {
    medias : []
}

function MediaReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_MEDIAS_SUCCESS:
            return {
                ...state,
                medias: action.payload.medias,
              };

        // Mise à jour
        case actions.UPDATE_MEDIAS_SUCCESS:
            state.medias.map(media => {
                if(media.id === action.payload.id) {
                    return {...media, ...action.payload.media}
                }
                else{
                    return media
                }
            })

        // Suppression
        case actions.DELETE_MEDIAS_SUCCESS:
              return state.medias.filter(media => media.id !== action.payload)

        // Ajout
        case actions.ADD_MEDIAS_SUCCESS:
            return [...state.medias, action.payload.media]
        default:
            return state
    }
}

export default MediaReducers