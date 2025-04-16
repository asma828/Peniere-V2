import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

// Pages publiques
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Plants from './pages/Plants';
import PlantDetails from './pages/PlantDetails';


// Pages client
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';

// Pages admin
import Dashboard from './pages/admin/Dashboard';
import ManagePlants from './pages/admin/ManagePlants';
import ManageCategories from './pages/admin/ManageCategories';
import Statistics from './pages/admin/Statistics';

// Pages employé
import OrdersManagement from './pages/employee/OrdersManagement';

// Composant pour les routes protégées par rôle
const RoleRoute = ({ children, allowedRoles }) => {
  const { user, isAuthenticated, loading } = useContext(AuthContext);
  
  if (loading) {
    return <div>Chargement...</div>;
  }
  
  if (!isAuthenticated || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/plants/:slug" element={<PlantDetails />} />
      
      {/* Routes client */}
      <Route 
        path="/cart" 
        element={
          <RoleRoute allowedRoles={['client']}>
            <Cart />
          </RoleRoute>
        } 
      />
      <Route 
        path="/checkout" 
        element={
          <RoleRoute allowedRoles={['client']}>
            <Checkout />
          </RoleRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <RoleRoute allowedRoles={['client', 'admin', 'employe']}>
            <Profile />
          </RoleRoute>
        } 
      />
      
      {/* Routes admin */}
      <Route 
        path="/admin" 
        element={
          <RoleRoute allowedRoles={['admin']}>
            <Dashboard />
          </RoleRoute>
        } 
      />
      <Route 
        path="/admin/plants" 
        element={
          <RoleRoute allowedRoles={['admin']}>
            <ManagePlants />
          </RoleRoute>
        } 
      />
      <Route 
        path="/admin/categories" 
        element={
          <RoleRoute allowedRoles={['admin']}>
            <ManageCategories />
          </RoleRoute>
        } 
      />
      <Route 
        path="/admin/statistics" 
        element={
          <RoleRoute allowedRoles={['admin']}>
            <Statistics />
          </RoleRoute>
        } 
      />
      
      {/* Routes employé */}
      <Route 
        path="/employee/orders" 
        element={
          <RoleRoute allowedRoles={['employe', 'admin']}>
            <OrdersManagement />
          </RoleRoute>
        } 
      />
      
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;