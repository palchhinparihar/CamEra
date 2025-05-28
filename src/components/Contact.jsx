import React from 'react'

const Contact = () => {
  return (
    <section data-aos="flip-up" className="min-h-[80vh] container mx-auto flex justify-center items-center px-6" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">Contact Us</h2>
        <form className="rounded-3xl shadow-lg shadow-blue-900 p-6 space-y-4 bg-gray-500">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button type="submit" className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-blue-900 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;