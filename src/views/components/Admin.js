
import {RegistrationAdmin} from './RegistrationAdmin';
import AdminProtectedPage from './AdminProtectedPage';

export const Admin = () => {
  return (
    <div>
      <AdminProtectedPage>
        <RegistrationAdmin />
      </AdminProtectedPage>
    </div>
  );
};