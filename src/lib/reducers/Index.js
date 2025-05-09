import {combineReducers} from 'redux';
import RegistrationReducers from './RegistrationReducers';
import SeminaireUsersReducers from './SeminaireUsersReducers';
import PaymentReducers from './PaymentReducers';
import SeminaireReducers from './SeminaireReducers';

export default combineReducers({
    registrations : RegistrationReducers,
    seminairesUsers : SeminaireUsersReducers,
    payments : PaymentReducers,
    seminaires : SeminaireReducers
});
