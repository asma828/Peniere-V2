const Footer = () => {
    return (
      <footer className="bg-green-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} PéAPInière - Tous droits réservés</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;