import React from 'react';

const Home = () => {
  return (
    <section id="home" className="relative h-screen bg-img">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">Welcome to FilsanShoes</h1>
          <p className="text-lg md:text-2xl mb-8">Explore the best collection of shoes for every occasion.</p>
          <a
            href="#products"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Shop Now
            
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
