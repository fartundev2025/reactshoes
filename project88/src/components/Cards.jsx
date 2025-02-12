import React from 'react';

const Cards = () => {
  const products = [
    { id: 1, title: "Stylish Sneakers", description: "Comfortable and trendy sneakers for everyday wear.", image: "spoot.jpg" },
    { id: 2, title: "Classic Boots", description: "Durable and stylish boots for all occasions.", image: "spoot2.jpg" },
    { id: 3, title: "Sporty Running Shoes", description: "Perfect running shoes for an active lifestyle.", image: "sport.jpg" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map(product => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;