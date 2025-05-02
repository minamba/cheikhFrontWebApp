import {Home} from './Home';
import {Navbar} from '../../components/index';
import {Footer} from '../../components/index';
import {CloseInscriptions} from './CloseInscriptions';
import {Inscriptions} from './Inscriptions';
import {Seminaire} from './Seminaire';
import {Payment} from './Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Fragment} from 'react';
import { ScrollToTop } from '../../components/index';


export const BaseApp = () => {
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
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
};
