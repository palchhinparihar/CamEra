import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="w-full h-[70px] flex justify-between items-center py-4 px-7 bg-blue-950 text-white sticky top-0 z-50">
        <div className="heading text-2xl">
          <NavLink to="/" onClick={closeMenu}>
            <span className="font-bold">Cam</span>
            <span><i>Era</i></span>
          </NavLink>
        </div>

        <div id="outer-container" className="h-10 w-10 block md:hidden">
          <Menu width={'60%'} right isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)} outerContainerId={"outer-container"}
            customBurgerIcon={<i className="fa fa-bars text-white text-center mt-1.5 text-2xl"></i>}
            customCrossIcon={<i className="fa fa-times text-white text-2xl"></i>}
          >
            <NavLink to="/cart" onClick={closeMenu} className="menu-item">
              <i className="fa-solid fa-cart-shopping mr-2"></i>
              <span>Cart</span>
            </NavLink>
            {routes.map((route, index) => (
              <NavLink key={index} to={route.path} onClick={closeMenu} className="menu-item">
                {route.name}
              </NavLink>
            ))}
          </Menu>
        </div>

        <ul className="hidden md:flex gap-4 items-center">
          <li className="hover:text-cyan-400 transition relative pr-2">
            <NavLink to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <p className="absolute -top-2 -right-3 bg-black px-2 mr-1 rounded-full text-sm">0</p>
            </NavLink>
          </li>
          {routes.map((route, index) => (
            <li key={index} className="hover:text-cyan-400 transition">
              <NavLink to={route.path}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
