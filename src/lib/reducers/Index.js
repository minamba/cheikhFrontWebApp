import {combineReducers} from 'redux';
import RegistrationReducers from './RegistrationReducers';
import SeminaireUsersReducers from './SeminaireUsersReducers';
import PaymentReducers from './PaymentReducers';
import SeminaireReducers from './SeminaireReducers';
import TelegramReducers from './TelegramReducers';
import UiReducer from './UiTelegramReducer';
import UiPaymentReducer from './UiPaymentReducer';
import MailReducers from './MailReducers';
import RegistrationPageReducers from './RegistrationPageReducers';
import ImageReducers from './ImageReducers';
import MediaReducers from './MediaReducers';
import SessionReducers from './SessionReducers';
import TargetReducers from './TargetReducers';
import ThemeReducers from './ThemeReducers';
import HomeReducers from './HomeReducers';
import WitnessReducers from './WitnessReducers';
import UploadReducers from './UploadReducers';
import CloseInscriptionReducers from './CloseInscriptionReducers';
import PaymentPageReducers from './PaymentPageReducers';
import StripeReducers from './stripeReducers';

export default combineReducers({
    registrations : RegistrationReducers,
    seminairesUsers : SeminaireUsersReducers,
    payments : PaymentReducers,
    seminaires : SeminaireReducers,
    messages : TelegramReducers,
    ui : UiReducer,
    uiPayment : UiPaymentReducer,
    mails : MailReducers,
    registrationPage : RegistrationPageReducers,
    images : ImageReducers,
    medias : MediaReducers,
    sessions : SessionReducers,
    targets : TargetReducers,
    themes : ThemeReducers,
    homes : HomeReducers,
    witnesses : WitnessReducers,
    upload : UploadReducers,
    closeInscription : CloseInscriptionReducers,
    paymentPage : PaymentPageReducers,
    stripe : StripeReducers,
});
