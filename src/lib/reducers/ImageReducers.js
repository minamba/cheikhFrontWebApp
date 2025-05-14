import { actions } from "../actions/ImageActions";

const initialState = {
    images : []
}

function ImageReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.payload.images,
              };

        // Mise à jour
        case actions.UPDATE_IMAGES_SUCCESS:
            state.images.map(image => {
                if(image.id === action.payload.id) {
                    return {...image, ...action.payload.image}
                }
                else{
                    return image
                }
            })

        // Suppression
        case actions.DELETE_IMAGES_SUCCESS:
              return state.images.filter(image => image.id !== action.payload)

        // Ajout
        case actions.ADD_IMAGES_SUCCESS:
            return [...state.images, action.payload.image]
        default:
            return state
    }
}

export default ImageReducers