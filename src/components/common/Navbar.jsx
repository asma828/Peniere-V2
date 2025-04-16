import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const { itemCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">PéAPInière</Link>
        
        <div className="flex space-x-4">
          <Link to="/plants" className="hover:underline">Plantes</Link>
          
          {isAuthenticated ? (
            <>
              {user?.role === 'admin' && (
                <Link to="/admin" className="hover:underline">Admin</Link>
              )}
              
              {user?.role === 'employe' && (
                <Link to="/employee/orders" className="hover:underline">Gestion des commandes</Link>
              )}
              
              <Link to="/profile" className="hover:underline">Profil</Link>
              
              {user?.role === 'client' && (
                <Link to="/cart" className="hover:underline flex items-center">
                  Panier
                  {itemCount > 0 && (
                    <span className="ml-1 bg-white text-green-700 rounded-full h-5 w-5 flex items-center justify-center text-xs">
                      {itemCount}
                    </span>
                  )}
                </Link>
              )}
              
              <button onClick={handleLogout} className="hover:underline">Déconnexion</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Connexion</Link>
              <Link to="/register" className="hover:underline">Inscription</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;