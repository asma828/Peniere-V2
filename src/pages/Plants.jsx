import { useState, useEffect } from 'react';
import PlantService from '../api/plantService';
import PlantCard from '../components/plants/PlantCard';

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setLoading(true);
        const data = await PlantService.getAllPlants();
        setPlants(data);
      } catch (err) {
        setError('Erreur lors du chargement des plantes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center py-12 text-lg text-gray-600">Chargement des plantes...</div>;
  }

  if (error) {
    return <div className="bg-red-100 text-red-700 p-4 rounded-md text-center mx-auto max-w-2xl my-8">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">Catalogue de plantes</h1>
      
      {plants.length === 0 ? (
        <div className="bg-gray-100 rounded-md p-8 text-center text-gray-600">
          Aucune plante ne correspond à vos critères de recherche.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Plants;