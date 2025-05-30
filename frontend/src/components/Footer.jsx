import { NavLink } from 'react-router-dom';

const Footer = () => {
  const mediaIcons = [
    { name: "Instagram", icon: "fa-instagram", link: "https://instagram.com/yourpage" },
    { name: "Facebook", icon: "fa-square-facebook", link: "https://facebook.com/yourpage" },
    { name: "Twitter", icon: "fa-x-twitter", link: "https://twitter.com/yourpage" },
  ];

  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center gap-1.5 md:gap-6 py-3 md:py-5 px-6 bg-gray-700 text-white">
      <div className="heading text-lg">
        <NavLink to="/">
          <span className="font-bold">Cam</span>
          <span><i>Era</i></span>
        </NavLink>
      </div>

      <div className="text-sm">© 2025 CamEra. All rights reserved.</div>

      <div className="flex gap-4 text-xl">
        {mediaIcons.map((social, index) => {
          return (
            <a key={index} href={social.link} aria-label={social.name} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
              <i className={`fa-brands ${social.icon}`}></i>
            </a>
          )
        })}
      </div>
    </footer>
  );
};

export default Footer;
