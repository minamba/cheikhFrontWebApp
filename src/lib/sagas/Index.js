import  registrationsSagas from "./registrations";
import { all } from "redux-saga/effects";


export default function* rootSaga() {
    yield all([
        ...registrationsSagas
    ]);
}