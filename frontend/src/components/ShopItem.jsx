import React from 'react';

const ShopItem = () => {
  return (
    <div data-aos="fade-up" className="cards mt-12 pb-12 mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
      <div className="card bg-[#2A2E4B] shadow-md shadow-gray-800 rounded-xl pb-4 flex flex-col hover:scale-105 transition-all duration-300">
        <div className="image h-52 flex justify-center items-center bg-white py-0.5 rounded-t-xl">
          <img
            className="h-full object-fit"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/u/a/-original-imahbfxucrrhpurh.jpeg?q=70"
            alt="Headphones"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mt-4">
          <div className="text-lg text-center text-wrap">ZEBRONICS SILENCIO 111</div>
          <p className="text-2xl font-semibold text-center">₹400</p>
          <p className="text-sm px-3 py-1 rounded-xl bg-[#3D4460] text-green-400 mt-3">Free Delivery</p>
          
          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-0.5 rounded-full flex gap-1.5 items-center mt-2">
            <span>4.3</span>
            <i className="fa-solid fa-star text-[12px]"></i>
          </button>
          
          <p className="text-sm text-gray-300">374 reviews</p>

          <button className="bg-[#081425] hover:bg-[#232b37] text-white px-4 py-1 rounded-full font-semibold mt-2 transition cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>  
    </div>
  );
};

export default ShopItem
