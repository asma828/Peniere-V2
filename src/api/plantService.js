import axios from '../utils/axiosConfig';

const PlantService = {
  getAllPlants: async () => {
    const response = await axios.get('/plants');
    return response.data;
  },

  getPlantBySlug: async (slug) => {
    const response = await axios.get(`/plants/${slug}`);
    return response.data;
  },

  createPlant: async (plantData) => {
    const response = await axios.post('/plants', plantData);
    return response.data;
  },

  updatePlant: async (slug, plantData) => {
    const response = await axios.put(`/plants/${slug}`, plantData);
    return response.data;
  },

  deletePlant: async (slug) => {
    const response = await axios.delete(`/plants/${slug}`);
    return response.data;
  },
};

export default PlantService;