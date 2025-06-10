import React from 'react';
import ShopItem from './ShopItem';

const Shop = () => {
  return (
    <section data-aos="fade-up" id="shop" className="min-h-90 text-white">
      <p className="text-5xl font-bold py-10 text-center">Explore</p>
      <ShopItem />
    </section>
  )
}

export default Shop;