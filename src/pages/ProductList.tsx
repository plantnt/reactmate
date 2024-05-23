import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../utils/Utils'
import ProductCard from '../components/productCard';

const ProductList = () => {
  const { userId } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products where user_id matches the provided userId
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('user_id', userId);

        if (error) {
          console.error('Error fetching products:', error.message);
          return;
        }

        if (data) {
          setProducts(data);
        } else {
            console.error('No products found for the specified user ID.');
        }
    } catch (error) {
        console.error('Error in fetchProducts:', error);
    }
};

fetchProducts();
}, [userId]);

console.log(products)
console.log(products.map((prod) => (
    prod.title
)))
  

  return (
    <div className='flex flex-wrap gap-3 p-3 h-full w-full'>
        {products.map((product) => (
            <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image}/>
        ))} 
    </div>
  );
};

export default ProductList;