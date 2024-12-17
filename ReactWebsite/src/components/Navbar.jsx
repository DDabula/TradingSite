import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Name Section */}
        <div className="flex items-center space-x-2">
          <img 
            src='./src/assets/logo.png' 
            alt="Logo" 
            className="h-8 w-auto" // Adjusts the logo size to match the text size
          />
          <h1
            onClick={handleHome}
            className="text-xl font-bold animate__animated animate__fadeIn animate__delay-0.5s cursor-pointer"
          >
            Trading Signals
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
