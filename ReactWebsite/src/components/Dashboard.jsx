import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    const fetchSignals = () => {
      const dummySignals = [
        { id: 1, pair: 'EUR/USD', type: 'Buy', price: '1.1050', time: '10:00 AM' },
        { id: 2, pair: 'GBP/USD', type: 'Sell', price: '1.2550', time: '11:30 AM' },
        { id: 3, pair: 'USD/JPY', type: 'Buy', price: '144.20', time: '1:45 PM' },
        { id: 4, pair: 'BTC/USD', type: 'Sell', price: '39,500', time: '3:15 PM' },
      ];
      setSignals(dummySignals);
    };

    fetchSignals();
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 ">
      <h2 className="text-4xl font-bold text-center mb-8">Trading Signals Dashboard</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Pair</th>
              <th className="py-3 px-4 text-left">Type</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {signals.map((signal, index) => (
              <tr key={signal.id} className="hover:bg-gray-100">
                <td className="py-3 px-4 border-b">{index + 1}</td>
                <td className="py-3 px-4 border-b">{signal.pair}</td>
                <td
                  className={`py-3 px-4 border-b font-semibold ${
                    signal.type === 'Buy' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {signal.type}
                </td>
                <td className="py-3 px-4 border-b">{signal.price}</td>
                <td className="py-3 px-4 border-b">{signal.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
