import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBell, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/signup');
  };

  const handlePayment = () => {
    navigate('/payment');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r bg-gray-900 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">Welcome to Trading Signals</h2>
        <p className="text-lg text-gray-200 mb-8 animate__animated animate__fadeIn animate__delay-1.5s">Get the best trading signals to maximize your profits with accurate, real-time insights.</p>
        <button onClick={handleJoinNow} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-100">Why Choose Our Trading Signals?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Accurate Predictions */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faBolt} className="w-8 h-8 text-blue-500 mr-4" />
              <h4 className="text-xl font-semibold text-gray-800">Accurate Predictions</h4>
            </div>
            <p className="text-gray-600">Our signals are based on data-driven analysis and expert insights, ensuring high accuracy for your trades.</p>
          </div>

          {/* Real-Time Alerts */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faBell} className="w-8 h-8 text-yellow-500 mr-4" />
              <h4 className="text-xl font-semibold text-gray-800">Real-Time Alerts</h4>
            </div>
            <p className="text-gray-600">Receive instant alerts on your phone, so you never miss a profitable trading opportunity.</p>
          </div>

          {/* 24/7 Support */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faHeadset} className="w-8 h-8 text-green-500 mr-4" />
              <h4 className="text-xl font-semibold text-gray-800">24/7 Support</h4>
            </div>
            <p className="text-gray-600">Our support team is available round the clock to assist you with any questions or issues you might have.</p>
          </div>
        </div>
      </div>
    </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900 text-center text-white">
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-100">Our Pricing Plans</h2>
        <p className="text-lg text-gray-100 mb-12">Choose the plan that fits your trading needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Basic Plan */}
          <div className="border bg-gray-100 border-gray-200 rounded-lg shadow-lg p-6 text-center transition-all hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-2xl font-bold mb-4 text-gray-600">Basic</h3>
            <p className="text-gray-500 mb-6">For beginners in trading</p>
            <h4 className="text-4xl font-bold mb-6 text-gray-600">$29<span className="text-lg">/month</span></h4>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> 5 Trading Signals Daily</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Email Notifications</li>
              <li><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-2" /> Premium Support</li>
            </ul>
            <button onClick={handlePayment}  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="border bg-gray-100 border-gray-200 rounded-lg shadow-lg p-6 text-center transition-all hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-2xl font-bold mb-4 text-gray-600">Standard</h3>
            <p className="text-gray-500 mb-6">For regular traders</p>
            <h4 className="text-4xl font-bold mb-6 text-gray-600">$59<span className="text-lg">/month</span></h4>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> 20 Trading Signals Daily</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Email & SMS Notifications</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Premium Support</li>
            </ul>
            <button onClick={handlePayment}  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border bg-gray-100 border-gray-200 rounded-lg shadow-lg p-6 text-center transition-all hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-2xl font-bold mb-4 text-gray-600">Premium</h3>
            <p className="text-gray-500 mb-6">For advanced traders</p>
            <h4 className="text-4xl font-bold mb-6 text-gray-600">$99<span className="text-lg">/month</span></h4>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Unlimited Trading Signals</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Email, SMS & App Notifications</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> 24/7 Premium Support</li>
            </ul>
            <button onClick={handlePayment} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12 text-gray-00">What Our Users Are Saying</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-all hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out">
              <p className="text-gray-600 mb-4 ">The trading signals have helped me make smarter, more profitable decisions. I couldnt ask for a better service!</p>
              <p className="font-semibold text-gray-800">John Doe</p>
              <p className="text-sm text-gray-500">Professional Trader</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-all hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out">
              <p className="text-gray-600 mb-4">I was new to trading and these signals made it so much easier to get started. Definitely worth the investment!</p>
              <p className="font-semibold text-gray-800">Jane Smith</p>
              <p className="text-sm text-gray-500">Beginner Trader</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-all hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out">
              <p className="text-gray-600 mb-4">Thanks to the real-time alerts, I can trade with confidence, knowing that I am always in the loop.</p>
              <p className="font-semibold text-gray-800">Mark Johnson</p>
              <p className="text-sm text-gray-500">Active Investor</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
