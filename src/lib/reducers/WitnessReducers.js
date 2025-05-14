import { actions } from "../actions/WitnessActions";

const initialState = {
    witnesses : []
}

function WitnessReducers(state = initialState, action) {
    switch(action.type) {

        // Récupération
        case actions.GET_WITNESSES_SUCCESS:
            return {
                ...state,
                witnesses: action.payload.witnesses,
              };

        // Mise à jour
        case actions.UPDATE_WITNESSES_SUCCESS:
            state.witnesses.map(witness => {
                if(witness.id === action.payload.id) {
                    return {...witness, ...action.payload.witness}
                }
                else{
                    return witness    
                }
            })

        // Suppression
        case actions.DELETE_WITNESSES_SUCCESS:
              return state.witnesses.filter(witness => witness.id !== action.payload)

        // Ajout
        case actions.ADD_WITNESSES_SUCCESS:
            return [...state.witnesses, action.payload.witness]
        default:
            return state
    }
}

export default WitnessReducers