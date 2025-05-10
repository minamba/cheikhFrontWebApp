import {Home} from './Home';
import {Navbar} from '../../components/index';
import {Footer} from '../../components/index';
import {CloseInscriptions} from './CloseInscriptions';
import {Inscriptions} from './Inscriptions';
import {Seminaire} from './Seminaire';
import {Payment} from './Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Fragment} from 'react';
import {Admin} from './Admin';
import {RegistrationAdmin} from './RegistrationAdmin';
import {SeminaireAdmin} from './SeminaireAdmin';
import {PaymentAdmin} from './PaymentAdmin';
import { ScrollToTop } from '../../components/index';
import { useEffect } from 'react';
import {getRegistrationsRequest} from '../../lib/actions/RegistrationActions';
import { useDispatch, useSelector } from 'react-redux';
import { getSeminairesUserRequest } from '../../lib/actions/SeminaireUsersActions';
import { getSeminairesRequest } from '../../lib/actions/SeminaireActions';
import { getPaymentsRequest } from '../../lib/actions/PaymentActions';

export const BaseApp = props => {
const datas = useSelector((state) => state.registrations);
const datas2 = useSelector((state) => state.seminaires);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getRegistrationsRequest());
  dispatch(getSeminairesUserRequest()); 
  dispatch(getSeminairesRequest());
  dispatch(getPaymentsRequest());

},[]);

// useEffect(() => {
 
// },[]);

  return (
    <Fragment>
      <Router>
        <ScrollToTop /> 
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CloseInscriptions" element={<CloseInscriptions />} />
          <Route path="/inscription" element={<Inscriptions />} />
          <Route path="/seminaire" element={<Seminaire />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/registrations" element={<RegistrationAdmin />} />
          <Route path="/admin/seminaires" element={<SeminaireAdmin />} />
          <Route path="/admin/payments" element={<PaymentAdmin />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
};
