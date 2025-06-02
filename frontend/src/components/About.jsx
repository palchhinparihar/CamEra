import React from 'react';
import aboutAnimation from '../assets/about.json';
import LottieBG from './LottieBG';

const About = () => {
  return (
    <section data-aos="fade-out" className="min-h-[84vh] container mx-auto flex md:flex-row flex-col-reverse justify-between items-center md:gap-10 px-6 pb-12">
      <div className="md:w-[60%] md:mx-auto mx-5 text-center py-12 px-2 text-white">
        <h2 className="text-5xl font-bold mb-4 text-cyan-400">About Us</h2>
        <p className="max-w-3xl mx-auto mb-4">
          CamEra is your go-to destination for discovering and selling vintage cameras.
          We believe in preserving the charm of analog photography and connecting people
          who share the same passion for timeless devices.
        </p>
        <p className="max-w-3xl mx-auto">
          Whether you're a collector, a film lover, or someone selling their old gear,
          our platform is designed to give you a smooth, secure experience.
        </p>
      </div>
      <div className="md:w-[40%] w-[60%]">
        <LottieBG animation={aboutAnimation} />
      </div>
    </section>
  )
}

export default About;