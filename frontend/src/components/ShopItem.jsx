import { useEffect, useState } from 'react';
import getRatingBg from '../utils';

const ShopItem = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const products = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      setProducts(json.products);
      } catch (error) {
        console.error('Error during login:', error);
      }
    }

    products();
  }, []);

  const handleAddToCart = (id) => {
    console.log("clicked on add to cart", id);
  }

  return (
    <div className="cards mt-12 pb-12 mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10">
      {!products ? <div>No products!</div> : 
      (products.map((product) => {
        return (<div key={product._id} className="card bg-[#2A2E4B] shadow-md shadow-gray-800 rounded-xl flex flex-col hover:scale-105 transition-all duration-300">
        <div className="image h-52 flex justify-center items-center bg-white py-0.5 rounded-t-xl">
          <img
            className="h-full object-fit rounded-t-xl"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/u/a/-original-imahbfxucrrhpurh.jpeg?q=70"
            alt={product.name}
          />
        </div>
        <div className="flex border border-blue-300 rounded-b-xl flex-col justify-center items-center gap-2 py-4">
          <div className="text-lg text-center text-wrap px-1">{product.name}</div>
          <p className="text-2xl font-semibold text-center">{product.price}</p>
          <p className="text-sm px-3 py-1 rounded-xl bg-[#3D4460] text-green-400 mt-3">Free Delivery</p>

          <button className={`${getRatingBg(product.rating)} text-white px-3 py-0.5 rounded-full flex gap-1.5 items-center mt-2`}>
            <span>{product.rating}</span>
            <i className="fa-solid fa-star text-[12px]"></i>
          </button>

          <p className="text-sm text-gray-300">{product.numReviews} reviews</p>

          <button onClick={() => {handleAddToCart(product._id)}} className="bg-[#081425] hover:bg-[#232b37] text-white px-4 py-1 rounded-full font-semibold mt-2 transition cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>)
      }))}
    </div>
  );
};

export default ShopItem;
