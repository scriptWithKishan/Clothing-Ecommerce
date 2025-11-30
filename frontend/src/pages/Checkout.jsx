import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { createOrder } from '../services/api';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderData = {
        cartItems: cartItems.map(item => ({
          product: item.product._id,
          name: item.product.name,
          qty: item.quantity,
          image: item.product.image,
          price: item.product.price,
          size: item.size
        }))
      };

      const createdOrder = await createOrder(orderData);
      clearCart();
      navigate(`/order/${createdOrder.order._id}`);
    } catch (error) {
      console.error("Order creation failed", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return <div className="text-center py-20">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Order Summary</h2>
          <div className="space-y-4 mb-4">
            {cartItems.map((item) => (
              <div key={`${item.product._id}-${item.size}`} className="flex justify-between text-sm">
                <span className="text-gray-600">{item.product.name} (x{item.quantity})</span>
                <span className="font-medium text-gray-900">${item.product.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg text-gray-900">
            <span>Total</span>
            <span>${getCartTotal()}</span>
          </div>

          <form onSubmit={handleSubmit} className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md font-bold hover:bg-indigo-700 transition duration-300 disabled:bg-gray-400"
            >
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
