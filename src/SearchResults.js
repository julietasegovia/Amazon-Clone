import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from './Product';

const ALL_PRODUCTS = [
    {
    id: "12321341",
    title: "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    price: 11.96,
    rating: 5,
    image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
  },
  {
    id: "49538094",
    title: "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
    price: 239.0,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
  },
  {
    id: "4903850",
    title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
    price: 199.99,
    rating: 3,
    image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
  },
  {
    id: "23445930",
    title: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
    price: 98.99,
    rating: 5,
    image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
  },
  {
    id: "3254354345",
    title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    price: 598.99,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
  },
  {
    id: "90829332",
    title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
    price: 1094.98,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
  },
];

function SearchResults() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q') || '';

    const results = ALL_PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className='bg-gray-200 min-h-screen p-8'>
        <h2 className='text-xl font-bold mb-6'>
            {results.length > 0 ? `${results.length} result${results.length > 1 ? 's' : ''} for "${query}"` : `No results for "${query}"`}
        </h2>
        <div className='flex flex-wrap justify-center gap-4'>
            {results.map(p => (
                <Product key={p.id} {...p} />
            ))}
        </div>
    </div>
  )
}


export default SearchResults
