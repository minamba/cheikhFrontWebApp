import  registrationsSagas from "./registrations";
import  seminairesUsersSagas from "./seminairesUsers";
import  paymentsSagas from "./payments";
import { all } from "redux-saga/effects";
import seminairesSagas from "./seminaires";
import telegramSagas from "./telegram";
import mailSagas from "./mails";
import registrationPageSagas from "./registrationPage";
import homesSagas from "./homes";
import sessionsSagas from "./sessions";
import witnessesSagas from "./witnesses";
import mediasSagas from "./medias";
import targetsSagas from "./targets";
import themesSagas from "./themes";
import imagesSagas from "./images";
import uploadSagas from "./upload";    
import closeInscriptionSagas from "./closeInscription";
import paymentPageSagas from "./paymentPage";
import stripeSagas from "./stripe";

export default function* rootSaga() {
    yield all([
        ...registrationsSagas,
        ...seminairesUsersSagas,
        ...paymentsSagas,
        ...seminairesSagas,
        ...telegramSagas,
        ...mailSagas,
        ...registrationPageSagas,
        ...homesSagas,
        ...sessionsSagas,
        ...witnessesSagas,
        ...mediasSagas,
        ...targetsSagas,
        ...themesSagas,
        ...imagesSagas,
        ...uploadSagas,
        ...closeInscriptionSagas,
        ...paymentPageSagas,
        ...stripeSagas,
    ]);
}