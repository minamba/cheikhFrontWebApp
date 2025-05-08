import  registrationsSagas from "./registrations";
import  seminairesSagas from "./seminaires";
import  paymentsSagas from "./payments";
import { all } from "redux-saga/effects";


export default function* rootSaga() {
    yield all([
        ...registrationsSagas,
        ...seminairesSagas,
        ...paymentsSagas
    ]);
}