import {combineReducers} from 'redux';
import RegistrationReducers from './RegistrationReducers';
import SeminaireReducers from './SeminaireReducers';
import PaymentReducers from './PaymentReducers';

export default combineReducers({
    registrations : RegistrationReducers,
    seminaires : SeminaireReducers,
    payments : PaymentReducers
});
