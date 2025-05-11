import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/SeminaireUsersActions';
import * as api from '../api/seminairesUsers';


function* getSeminaires() {
    try {
        const response = yield call(api.getSeminaires);
        console.log("je rentre dans le getSeminairesUser", response);
        yield put(actions.getSeminairesUserSuccess({seminairesUsers : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* addSeminaires(action) {
    try {
        console.log("je rentre dans le addSeminaireUserr", action.payload);
        const response = yield call(api.addSeminaire(action.payload));
        console.log("reponse de l'ajout");
        yield put({ type: actions.actionsSeminaire.ADD_SEMINAIRE_USER_SUCCESS, payload: action.payload.seminaireUser });
        // console.log("reponse de l'ajout", response);
        // yield put({ type: actions.actionsSeminaire.ADD_SEMINAIRE_USER_SUCCESS, payload: response });
        // const users = yield call(api.getSeminaires);
        // yield put(actions.getSeminairesUserSuccess({ seminairesUsers : users.data }));
    } catch (error) {
        yield put({ type: actions.actionsSeminaire.ADD_SEMINAIRE_USER_FAILURE, payload: error.message });
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* updateSeminaire(action) {
    try {
        console.log("je rentre dans le updateSeminaireUser", action.payload);
        yield call(api.updateSeminaire(action.payload));

        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getSeminaires);
        yield put(actions.getSeminairesUserSuccess({ seminairesUsers: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* deleteSeminaire(action) {
    try {
        console.log("je rentre dans le deleteSeminaireUser", action.payload);
        yield call(api.deleteSeminaire(action.payload));
        
        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getSeminaires);
        yield put(actions.getSeminairesUserSuccess({ seminairesUsers: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}


function* watchGetSeminairesUserRequest() {
    yield takeEvery(actions.actionsSeminaire.GET_SEMINAIRE_USER_REQUEST,getSeminaires);
}

function* watchAddSeminaireUserRequest() {
    yield takeLatest(actions.actionsSeminaire.ADD_SEMINAIRE_USER_REQUEST,addSeminaires);
}

function* watchUpdateSeminaireUserRequest() {
    yield takeLatest(actions.actionsSeminaire.UPDATE_SEMINAIRE_USER_REQUEST,updateSeminaire);
}

function* watchDeleteSeminaireUserRequest() {
    yield takeLatest(actions.actionsSeminaire.DELETE_SEMINAIRE_USER_REQUEST,deleteSeminaire);
}


const seminairesUsersSagas = [
    fork(watchGetSeminairesUserRequest),
    fork(watchAddSeminaireUserRequest),
    fork(watchUpdateSeminaireUserRequest),
    fork(watchDeleteSeminaireUserRequest)
];

export default seminairesUsersSagas;