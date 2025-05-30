import React from 'react';
import LottieBG from './LottieBG';
import mailAnimation from '../assets/mail.json'

const Contact = () => {
  return (
    <section className="min-h-[84vh] container mx-auto flex md:flex-row flex-col-reverse justify-between items-center md:gap-10 px-6 pb-12" id="contact">
      <div data-aos="flip-up" className="md:w-[60%] md:mx-auto mx-5">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">Contact Us</h2>
        <form className="rounded-3xl shadow-lg shadow-blue-900 p-6 md:mx-20 space-y-4 bg-gray-500">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="text-sm md:text-md w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="text-sm md:text-md w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="text-sm md:text-md w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button type="submit" className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-blue-900 transition-colors">
            Send Message
          </button>
        </form>
      </div>
      <div data-aos="fade-in" className="md:w-[40%] w-[60%]">
          <LottieBG animation={mailAnimation} />
        </div>
    </section>
  )
}

export default Contact;