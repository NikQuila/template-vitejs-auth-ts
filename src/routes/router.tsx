import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';
// import DashboardPage from '../pages/admin/DashboardPage';
import LoginPage from '../pages/auth/login';
import HomePage from '../pages/home';
import AdminHomePage from '../pages/admin/home';
import { useUserStore } from '../store/useUserStore';
import { SyncLoader } from 'react-spinners';
import ForgotPasswordPage from '../pages/auth/forgot-password';

const ProtectedRoute: React.FC = () => {
  const { isLogIn, isChecked } = useUserStore();
  if (!isChecked) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <SyncLoader color='#2563EB' />
      </div>
    );
  }
  return isLogIn ? <Outlet /> : <Navigate to='/auth/login' replace />;
};
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/admin/*' element={<ProtectedRoute />}>
          <Route path='home' element={<AdminHomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
