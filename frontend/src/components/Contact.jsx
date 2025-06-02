import React from 'react';
import LottieBG from './LottieBG';
import contactAnimation from '../assets/contact.json'

const Contact = () => {
  return (
    <section data-aos="fade-in" className="min-h-[84vh] container mx-auto flex md:flex-row flex-col-reverse justify-between items-center md:gap-10 px-6 pb-12" id="contact">
      <div className="md:w-[60%] md:mx-auto mx-5">
        <h2 className="text-5xl font-bold mb-6 text-center text-cyan-400">Contact Us</h2>
        <form className="p-6 md:mx-20 flex flex-col justify-center items-center md:items-start">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="text-sm md:text-md w-full p-3 bg-gray-100 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="text-sm md:text-md my-7 w-full p-3 bg-gray-100 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            className="text-sm md:text-md w-full p-3 bg-gray-100 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors mt-5">
            Send Message
          </button>
        </form>
      </div>
      <div className="md:w-[40%] w-[60%]">
        <LottieBG animation={contactAnimation} />
      </div>
    </section>
  )
}

export default Contact;