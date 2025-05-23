import { NavLink } from "react-router-dom";

const Navbar = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full h-[70px] flex justify-between items-center py-4 px-7 bg-blue-950 text-white sticky top-0">
      <div className="heading text-2xl">
        <NavLink to="/">
          <span className="font-bold">Cam</span>
          <span><i>Era</i></span>
        </NavLink>
      </div>

      <ul className="flex justify-between gap-4">
        <li className="hover:text-cyan-400 transition-all duration-200 relative cursor-pointer mr-2.5">
          <NavLink to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <p className="hover:scale-110 absolute -top-2.5 -right-3.5 bg-black px-2 rounded-full text-sm">0</p>
          </NavLink>
        </li>
        
        {routes.map((route, index) => {
          return (
            <li key={index} className="hover:text-cyan-400 transition-colors duration-200">
              <NavLink to={route.path}>{route.name}</NavLink>
            </li>
          )
        })}
        
      </ul>
    </nav>
  )
}

export default Navbar;