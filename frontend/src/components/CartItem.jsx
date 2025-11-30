import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.product.image || 'https://via.placeholder.com/100'}
          alt={item.product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={`/product/${item.product._id}`}>{item.product.name}</Link>
            </h3>
            <p className="ml-4">${item.product.price * item.quantity}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.product.category} | Size: {item.size}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center">
            <label htmlFor={`quantity-${item.product._id}-${item.size}`} className="mr-2 text-gray-500">Qty</label>
            <select
              id={`quantity-${item.product._id}-${item.size}`}
              value={item.quantity}
              onChange={(e) => updateQuantity(item.product._id, item.size, parseInt(e.target.value))}
              className="rounded-md border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 shadow-sm focus:border-black focus:ring-black sm:text-sm"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => removeFromCart(item.product._id, item.size)}
            className="font-medium text-red-600 hover:text-red-500"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
