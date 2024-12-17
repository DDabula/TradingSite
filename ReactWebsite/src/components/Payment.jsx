import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here'); // Replace with your Stripe publishable key

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
      'your-client-secret-here', // Replace with the client secret from your backend
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (stripeError) {
      setError(stripeError.message);
    } else if (paymentIntent.status === 'succeeded') {
      alert('Payment successful!');
      // Redirect to the success page or show a success message
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="card" className="block text-sm font-medium text-gray-700">
              Card Details
            </label>
            <CardElement className="mt-1 p-2 border border-gray-300 rounded" />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded"
            disabled={loading || !stripe}
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentPage;
