import React from 'react'

const About = () => {
  return (
    <section className="min-h-[80vh] container mx-auto flex justify-center items-center px-6">
      <div className="bg-gray-500 text-center py-12 px-2 text-white rounded-3xl shadow-lg shadow-blue-900">
        <h2 className="text-3xl font-bold mb-4 text-cyan-400">About Us</h2>
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
    </section>
  )
}

export default About;