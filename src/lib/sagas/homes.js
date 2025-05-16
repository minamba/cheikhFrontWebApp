import {takeEvery,takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/HomeActions';
import * as api from '../api/homes';


function* getHomes() {
    try {
        const response = yield call(api.getHomes);
        console.log("je rentre dans le getHomes", response);
        yield put(actions.getHomesSuccess({homes : response.data}));
    } catch (error) {
    //    yield put(actions.getHomesFailure({ error : error.response.data }));
    }
}

function* addHomes(action) {
    try {
        console.log("je rentre dans le addHomessssssssssssssssssssss", action.payload);
        const response = yield call(api.addHome,action.payload);
        yield put(actions.addHomesSuccess({home : response.data}));
    } catch (error) {
        yield put(actions.addHomesFailure({error : error.response.data}));
    }
}

function* updateHome(action) {
    try {
      console.log("je rentre dans le updateHome", action.payload);
  
      // Appel de l'API pour update
      yield call(api.updateHome, action.payload);
  
      // On recharge les données à jour
      const response = yield call(api.getHomes);
  
      // On envoie uniquement les données utiles dans le store
      yield put(actions.updateHomesSuccess({ home: response.data }));
    } catch (error) {
      console.error("Erreur updateHome :", error);
      yield put(actions.updateHomesFailure({ error: error.response?.data || error.message }));
    }
  }

// function* deleteHome(action) {
//     try {
//         console.log("je rentre dans le deleteHome", action.payload);
//         yield call(api.deleteHome(action.payload));
        
//         //je rappel getSeminaire pour la mise à jour du store
//         const response = yield call(api.getHomes);
//         yield put(actions.deleteHomesSuccess({ homes: response.data }));
//     } catch (error) {
//         yield put(actions.deleteHomesFailure({ error : error.response.data }));   
//     }
// }


function* watchGetHomesRequest() {
    yield takeEvery(actions.actions.GET_HOMES_REQUEST,getHomes);
}

function* watchAddHomeRequest() {
    yield takeLatest(actions.actions.ADD_HOMES_REQUEST,addHomes);
}

function* watchUpdateHomeRequest() {
    yield takeLatest(actions.actions.UPDATE_HOMES_REQUEST,updateHome);
}

// function* watchDeleteHomeRequest() {
//     yield takeLatest(actions.actionsHomes.DELETE_HOME_REQUEST,deleteHome);
// }


const homesSagas = [
    fork(watchGetHomesRequest),
    fork(watchUpdateHomeRequest),
    fork(watchAddHomeRequest)
];

export default homesSagas;