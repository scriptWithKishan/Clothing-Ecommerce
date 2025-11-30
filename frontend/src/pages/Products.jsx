import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    minPrice: '',
    maxPrice: '',
  });

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setPage(1);
      try {
        const params = { page: 1, limit: 8 };
        if (filters.search) params.search = filters.search;
        if (filters.category) params.category = filters.category;
        if (filters.minPrice) params.minPrice = filters.minPrice;
        if (filters.maxPrice) params.maxPrice = filters.maxPrice;

        const data = await fetchProducts(params);
        const newProducts = data.data || [];
        setProducts(newProducts);
        setHasMore(newProducts.length === 8);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      loadProducts();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [filters]);

  const loadMore = async () => {
    setLoadingMore(true);
    try {
      const params = { page: page + 1, limit: 8 };
      if (filters.search) params.search = filters.search;
      if (filters.category) params.category = filters.category;
      if (filters.minPrice) params.minPrice = filters.minPrice;
      if (filters.maxPrice) params.maxPrice = filters.maxPrice;

      const data = await fetchProducts(params);
      const newProducts = data.data || [];
      setProducts(prev => [...prev, ...newProducts]);
      setPage(prev => prev + 1);
      setHasMore(newProducts.length === 8);
    } catch (error) {
      console.error("Failed to fetch more products", error);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>

      <Filters filters={filters} setFilters={setFilters} />

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20 text-gray-500">No products found matching your criteria.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={loadMore}
                disabled={loadingMore}
                className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loadingMore ? 'Loading...' : 'Load More Products'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
