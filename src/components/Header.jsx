import { NavLink } from 'react-router-dom';

const Header = () => {
  const companies = [
    { image: "https://tse3.mm.bing.net/th?id=OIP.YM5yn1KvUgGhkrSytOsYRQHaCh&pid=Api&P=0&h=180", name: "Canon" },
    { image: "https://c.pxhere.com/photos/c8/bf/nikon_logo_foto-913179.jpg!d", name: "Nikon" },
    { image: "https://tse2.mm.bing.net/th?id=OIP.W0t2_TS0gyoJkypHrXMyiwHaCe&pid=Api&P=0&h=180", name: "Sony" },
    { image: "https://tse1.mm.bing.net/th?id=OIP.DiZ0JCtzzaOTYvirDgkxcAHaDU&pid=Api&P=0&h=180", name: "Panasonic" },
  ];
  return (
    <>
      <section className="w-full min-h-[50vh] bg-blue-50 flex flex-col-reverse md:flex-row justify-around items-center gap-4 p-6 text-center">
        <div className="md:w-[60%] flex flex-col justify-around items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-cyan-700">CamEra</span>
          </h1>
          <p className="md:text-xl mb-6 max-w-xl">Discover and buy timeless cameras that capture more than just memories.</p>
          <div className="flex gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-2 md:px-4 rounded">Shop Now</button>
            <button className="border border-black hover:bg-black hover:text-white font-semibold px-2 md:px-4 rounded">
              <NavLink to="/contact">Contact</NavLink>
            </button>
          </div>
        </div>

        <div className="md:w-[40%]">
          <img src="http://pluspng.com/img-png/photo-camera-png-vintage-camera-png-images-for-camera-png-image-1876-3919.png" alt="Camera" />
        </div>
      </section>

      <section className="min-h-40 py-4 px-4 md:px-6 bg-gray-100 flex overflow-auto flex-nowrap sm:justify-center items-center gap-2 md:gap-5">
        {companies.map((company, index) => {
          return <img key={index} className="w-32 md:w-60 h-12 shadow-gray-500 shadow-lg md:shadow-xl" src={company.image} alt={company.name} />
        })}   
      </section>
    </>
  )
}

export default Header