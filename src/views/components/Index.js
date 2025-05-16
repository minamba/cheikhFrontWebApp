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
import { getRegistrationPageRequest } from '../../lib/actions/RegistrationPageActions';
import { getThemesRequest } from '../../lib/actions/ThemeActions';
import { getTargetsRequest } from '../../lib/actions/TargetActions';
import { getSessionsRequest } from '../../lib/actions/SessionActions';
import { getWitnessesRequest } from '../../lib/actions/WitnessActions';
import { getImagesRequest } from '../../lib/actions/ImageActions';
import { getMediasRequest } from '../../lib/actions/MediaActions';
import { getHomesRequest } from '../../lib/actions/HomeActions';
import { getCloseInscriptionRequest } from '../../lib/actions/CloseInscriptionActions';
import { getPaymentPageRequest } from '../../lib/actions/PaymentPageActions';

import { SeminairePageAdmin } from './SeminairePageAdmin';
import { ThemeAdmin } from './ThemeAdmin';
import { TargetAdmin } from './TargetAdmin';
import { SessionAdmin } from './SessionAdmin';
import { HomeAdmin } from './HomeAdmin';
import ImageAdmin  from './ImageAdmin';
import MediaAdmin from './MediaAdmin';
import WitnessAdmin from './WitnessAdmin';
import {CloseInscriptionAdmin} from './CloseInscriptionAdmin';
import {PaymentPageAdmin} from './PaymentPageAdmin';


export const BaseApp = props => {
const datas = useSelector((state) => state.registrations);
const datas2 = useSelector((state) => state.seminaires);
const datas3 = useSelector((state) => state.payments);
const datas4 = useSelector((state) => state.images);
const datas5 = useSelector((state) => state.medias);

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getRegistrationsRequest());
  dispatch(getSeminairesUserRequest()); 
  dispatch(getSeminairesRequest());
  dispatch(getPaymentsRequest());
  dispatch(getRegistrationPageRequest());
  dispatch(getThemesRequest());
  dispatch(getTargetsRequest());
  dispatch(getSessionsRequest());
  dispatch(getWitnessesRequest());
  dispatch(getImagesRequest());
  dispatch(getMediasRequest());
  dispatch(getHomesRequest());
  dispatch(getCloseInscriptionRequest());
  dispatch(getPaymentPageRequest());


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
          <Route path="/admin/seminairesPage" element={<SeminairePageAdmin />} />
          <Route path="/admin/theme" element={<ThemeAdmin />} />
          <Route path="/admin/target" element={<TargetAdmin />} />
          <Route path="/admin/session" element={<SessionAdmin />} />
          <Route path="/admin/home" element={<HomeAdmin />} />
          <Route path="/admin/image" element={<ImageAdmin />} />
          <Route path="/admin/media" element={<MediaAdmin />} />
          <Route path="/admin/witness" element={<WitnessAdmin />} />
          <Route path="/admin/closeInscription" element={<CloseInscriptionAdmin />} />
          <Route path="/admin/paymentPage" element={<PaymentPageAdmin />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
};
