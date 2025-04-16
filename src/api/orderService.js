import axios from '../utils/axiosConfig';

const OrderService = {
  createOrder: async (orderData) => {
    const response = await axios.post('/orders', orderData);
    return response.data;
  },

  getOrderById: async (orderId) => {
    const response = await axios.get(`/orders/${orderId}`);
    return response.data;
  },

  cancelOrder: async (orderId) => {
    const response = await axios.delete(`/orders/${orderId}`);
    return response.data;
  },

  updateOrderStatus: async (orderId, status) => {
    const response = await axios.patch(`/orders/${orderId}/status`, { status });
    return response.data;
  },
};

export default OrderService;