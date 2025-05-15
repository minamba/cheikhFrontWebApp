 import { actions } from "../actions/UploadActions";
 
 const initialState = {
    showSuccessUpload: false,
    showErrorUpload: false
 }
 
function UploadReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.POST_UPLOAD_SUCCESS:
            return {
                ...state,
                showSuccessUpload: true,
              };

        // Mise à jour
        case actions.POST_UPLOAD_FAILURE:
            return {
                ...state,
                showErrorUpload: true,
              };

        case "HIDE_POPUP":
            return {
                ...state,
                showSuccessUpload: false,
                showErrorUpload: false
            }

        default:
            return state
    }
}

export default UploadReducers