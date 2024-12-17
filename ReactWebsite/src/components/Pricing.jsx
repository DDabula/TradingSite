import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  return (
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
