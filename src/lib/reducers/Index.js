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

export default combineReducers({
    registrations : RegistrationReducers,
    seminairesUsers : SeminaireUsersReducers,
    payments : PaymentReducers,
    seminaires : SeminaireReducers,
    messages : TelegramReducers,
    ui : UiReducer,
    uiPayment : UiPaymentReducer,
    mails : MailReducers,
    registrationPage : RegistrationPageReducers
});
