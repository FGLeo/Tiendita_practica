import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ title }) => {
  const products = [
    {
      id: 1,
      name: 'Fresh Oranges',
      price: 4.99,
      image: '/images/oranges.jpg',
      weight: '1 kg'
    },
    // Add more products as needed
  ];

  return (
    <div className="my-8">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;