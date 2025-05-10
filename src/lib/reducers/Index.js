import {combineReducers} from 'redux';
import RegistrationReducers from './RegistrationReducers';
import SeminaireUsersReducers from './SeminaireUsersReducers';
import PaymentReducers from './PaymentReducers';
import SeminaireReducers from './SeminaireReducers';
import TelegramReducers from './TelegramReducers';
import UiReducer from './UiTelegramReducer';
import uiSeminaireUserReducer from './UiSeminaireUsersReducers';
import UiPaymentReducer from './UiPaymentReducer';

export default combineReducers({
    registrations : RegistrationReducers,
    seminairesUsers : SeminaireUsersReducers,
    payments : PaymentReducers,
    seminaires : SeminaireReducers,
    messages : TelegramReducers,
    ui : UiReducer,
    uiSeminaireUser : uiSeminaireUserReducer,
    uiPayment : UiPaymentReducer
});
