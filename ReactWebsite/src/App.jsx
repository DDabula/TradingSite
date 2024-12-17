import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Dashboard from './components/Dashboard';
import Login from './components/LoginPage'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PaymentPage from './components/Payment';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page */}
          <Route path="/pricing" element={<Pricing />} />  {/* Pricing page */}
          <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard page */}
          <Route path="/login" element={<Login />} />  {/* Login page */}
          <Route path="/signup" element={<SignUp  />} />  {/* SignUp page */}
          <Route path="/payment" element={<PaymentPage  />} />  {/* Payment page */}
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
