import {combineReducers} from 'redux';
import RegistrationReducers from './RegistrationReducers';

export default combineReducers({
    registrations : RegistrationReducers
});
