import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id='id_id' className="container mx-auto p-4">
      <div className="bg-green-100 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Bienvenue à la PéAPInière</h1>
        <p className="text-lg mb-6">
          Découvrez notre sélection de plantes pour embellir votre intérieur et votre jardin.
        </p>
        <Link to="/plants" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
          Voir notre catalogue
        </Link>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Plantes d'intérieur</h2>
          <p className="mb-4">Des plantes adaptées à tous les espaces intérieurs.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Plantes aromatiques</h2>
          <p className="mb-4">Donnez du goût à vos plats avec nos herbes aromatiques.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Plantes d'extérieur</h2>
          <p className="mb-4">Embellissez votre jardin avec nos plantes résistantes.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;