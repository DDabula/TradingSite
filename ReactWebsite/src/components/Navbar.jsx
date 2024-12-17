import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold animate__animated animate__fadeIn animate__delay-0.5s">Trading Signals</h1>
        <ul className="flex space-x-4">
          <li>
            <Link 
              to="/" 
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
