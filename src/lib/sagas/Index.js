import  registrationsSagas from "./registrations";
import  seminairesUsersSagas from "./seminairesUsers";
import  paymentsSagas from "./payments";
import { all } from "redux-saga/effects";
import seminairesSagas from "./seminaires";
import telegramSagas from "./telegram";


export default function* rootSaga() {
    yield all([
        ...registrationsSagas,
        ...seminairesUsersSagas,
        ...paymentsSagas,
        ...seminairesSagas,
        ...telegramSagas
    ]);
}