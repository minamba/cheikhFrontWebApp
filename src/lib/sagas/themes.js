import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/ThemeActions';
import * as api from '../api/themes';


function* getThemes() {
    try {
        const response = yield call(api.getThemes);
        //console.log("je rentre dans le getThemes", response);
        yield put(actions.getThemesSuccess({themes : response.data}));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* addThemes(action) {
    try {
        //console.log("je rentre dans le addThemes", action.payload);
        const response = yield call(api.addTheme,action.payload);
        yield put(actions.addThemesSuccess({theme : response.data}));
    } catch (error) {
        yield put(actions.addThemesFailure({error : error.response.data}));
    }
}

function* updateTheme(action) {
    try {
        //console.log("je rentre dans le updateTheme", action.payload);
//         const payload = { ...action.payload };
// delete payload.IdSeminaireNavigation;
        yield call(api.updateTheme,action.payload);

        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getThemes);
        yield put(actions.getThemesSuccess({ themes: response.data }));
    } catch (error) {
        //yield put({type: actions.GET_REGISTRATION_FAILURE, payload: error});
    }
}

function* deleteTheme(action) {
    try {
        //console.log("je rentre dans le deleteTheme", action.payload);
        yield call(api.deleteTheme,action.payload);
        
        //je rappel getSeminaire pour la mise à jour du store
        const response = yield call(api.getThemes);
        yield put(actions.getThemesSuccess({ theme: response.data }));
    } catch (error) {
        yield put(actions.getThemesFailure({ error : error.response.data }));   
    }
}


function* watchGetThemesRequest() {
    yield takeEvery(actions.actions.GET_THEMES_REQUEST,getThemes);
}

function* watchAddThemeRequest() {
    yield takeLatest(actions.actions.ADD_THEMES_REQUEST,addThemes);
}

function* watchUpdateThemeRequest() {
    yield takeLatest(actions.actions.UPDATE_THEMES_REQUEST,updateTheme);
}

function* watchDeleteThemeRequest() {
    yield takeLatest(actions.actions.DELETE_THEMES_REQUEST,deleteTheme);
}


const themesSagas = [
    fork(watchGetThemesRequest),
    fork(watchAddThemeRequest),
    fork(watchUpdateThemeRequest),
    fork(watchDeleteThemeRequest)
];

export default themesSagas;