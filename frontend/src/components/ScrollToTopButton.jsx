import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-12 right-10 rounded-full py-3 px-4 bg-cyan-500 shadow shadow-gray-500 ${isVisible ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up fw-semibold text-white text-xl"></i>
    </button>
  );
}

export default ScrollToTopButton;
