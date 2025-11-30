import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <Link to={`/product/${product._id}`}>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={product.image || 'https://via.placeholder.com/300'}
            alt={product.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 flex justify-between px-4 pb-4">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
