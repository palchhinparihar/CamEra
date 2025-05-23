import React from 'react'

const Header = () => {
  return (
    <section className="w-full min-h-[50vh] bg-blue-50 flex flex-col-reverse md:flex-row justify-around items-center gap-4 p-6 text-center">
      <div className="md:w-[60%] flex flex-col justify-around items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-cyan-700">CamEra</span>
        </h1>
        <p className="md:text-xl mb-6 max-w-xl">Discover and buy timeless cameras that capture more than just memories.</p>
        <div className="flex gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-2 md:px-4 rounded">Shop Now</button>
          <button className="border border-black hover:bg-black hover:text-white font-semibold px-2 md:px-4 rounded">Contact</button>
        </div>
      </div>

      <div className="md:w-[40%]">
        <img src="http://pluspng.com/img-png/photo-camera-png-vintage-camera-png-images-for-camera-png-image-1876-3919.png" alt="Camera" />
      </div>
    </section>
  )
}

export default Header