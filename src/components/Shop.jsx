import React from 'react';
import ShopItem from './ShopItem';

const Shop = () => {
  return (
    <section id="shop" className="min-h-80">
      <p className="text-5xl font-bold py-10 text-center">Explore</p>
      <ShopItem />
    </section>
  )
}

export default Shop;