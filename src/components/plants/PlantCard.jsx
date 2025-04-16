import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const PlantCard = ({ plant }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(plant, 1);
  };

  return (
    <div className="plant-card">
      {plant.image ? (
        <img src={plant.image} alt={plant.name} className="plant-image" />
      ) : (
        <div className="plant-image-placeholder">Image non disponible</div>
      )}
      
      <div className="plant-details">
        <h3>{plant.name}</h3>
        <p className="plant-price">{Number (plant.price).toFixed(2)} €</p>
        <p className="plant-category">Catégorie: {plant.category_id?.name || 'Non catégorisée'}</p>
        
        <div className="plant-actions">
          <Link to={`/plants/${plant.slug}`} className="view-details-btn">
            Voir les détails
          </Link>
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;