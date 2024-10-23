import React, { useContext,  useEffect,  useState } from 'react';
import { ProductContext } from './context/ProductContext';
import Product from './component/Product';
import Hero from './component/Hero';
import '../src/home.css'

function Home() {
 
    const { products } = useContext(ProductContext);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [productsToShow, setProductsToShow] = useState(10);
    console.log(products)

    // console.log(filteredProducts);

    useEffect(() => {
        setFilteredProducts(products.slice(0, productsToShow));
      }, [products, productsToShow]);

    const filterByCategory = (category) => {
        if (category === 'All Products') {
            setFilteredProducts(products);
        } else {
            const element = products.filter((product) => product.category === category);
            setFilteredProducts(element);
        }
    };

    const handleLoadMore = () => {
        
        setProductsToShow((prevCount) => prevCount + 5);
        
            
    
      };

   

    return (
        <div>
            <Hero />
            <section className='py-16 mt-6'>
                <div className="container flex flex-wrap justify-center">
                    <button onClick={() => filterByCategory('All Products')} className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
                        All Products
                    </button>
                    <button onClick={() => filterByCategory('beauty')} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                        beauty
                    </button>
                    <button onClick={() => filterByCategory('fragrances')} className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 me-2'>
                        fragrances
                    </button>
                    <button onClick={() => filterByCategory('furniture')} className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'>
                        furniture
                    </button>
                    {/* <button onClick={() => filterByCategory('skincare')} className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
                        Skincare
                    </button> */}
                    <button onClick={() => filterByCategory('groceries')} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
                        Groceries
                    </button>
                    {/* <button onClick={() => filterByCategory('home-decoration')} className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>
                        Home Decoration
                    </button> */}
                </div>
                <div className="container mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] '>
                        {filteredProducts.map((product) => (
                            <Product product={product} key={product.id} />
                        ))}
                    </div>
                    {productsToShow < products.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleLoadMore}
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
              >
                Load More
              </button>
            </div>
          )}
                </div>
            </section>
        </div>
    );
}

export default Home;
