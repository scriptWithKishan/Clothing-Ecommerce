import { useParams, Link } from 'react-router-dom';

const OrderSuccess = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="mb-8">
        <svg className="mx-auto h-20 w-20 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
      <p className="text-lg text-gray-600 mb-8">Thank you for your purchase. Your order ID is <span className="font-mono font-bold text-indigo-600">{id}</span>.</p>
      <Link to="/" className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;
