import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Charger le panier depuis le localStorage au démarrage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
      calculateTotal(parsedCart);
    }
  }, []);

  // Sauvegarder le panier dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    calculateTotal(cartItems);
  }, [cartItems]);

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const addToCart = (plant, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.slug === plant.slug);
      if (existingItem) {
        return prevItems.map((item) =>
          item.slug === plant.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...plant, quantity }];
      }
    });
  };

  const removeFromCart = (slug) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.slug !== slug));
  };

  const updateQuantity = (slug, quantity) => {
    if (quantity <= 0) {
      removeFromCart(slug);
      return;
    }
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.slug === slug ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount: cartItems.reduce((count, item) => count + item.quantity, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};