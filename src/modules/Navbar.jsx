import { useState, useEffect } from "react";
import { GiCartwheel } from "react-icons/gi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    const targetElement = document.getElementById(section);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 60;
    const sections = ["home", "prices", "top", "cars", "team", "faq", "contact"];

    let foundActiveSection = false;

    for (const section of sections) {
      const targetElement = document.getElementById(section);

      if (
        targetElement &&
        scrollPosition >= targetElement.offsetTop &&
        scrollPosition < targetElement.offsetTop + targetElement.offsetHeight
      ) {
        setActiveSection(section);
        foundActiveSection = true;
        break;
      }
    }

    if (!foundActiveSection) {
      setActiveSection(sections[sections.length - 1]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  return (
    <div id="top" className="glass">
      <div className={`navbar ${showBurgerMenu ? "burger-menu" : ""}`}>
        <a onClick={() => handleNavClick("top")}>
          <div className="logo">
            <h3>Horiz<GiCartwheel />n</h3>
            <h5>Rent a CAR</h5>
          </div>
        </a>

        <div className="burger-icon" onClick={toggleBurgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${showBurgerMenu ? "show" : ""}`}>
          <li
            className={`navbutton ${activeSection === "home" ? "active" : ""}`}
            onClick={() => handleNavClick("home")}
          >
            Home
          </li>
          <li
            className={`navbutton ${activeSection === "cars" ? "active" : ""}`}
            onClick={() => handleNavClick("cars")}
          >
            Cars
          </li>
          <li
            className={`navbutton ${activeSection === "prices" ? "active" : ""}`}
            onClick={() => handleNavClick("prices")}
          >
            Prices
          </li>
          <li
            className={`navbutton ${activeSection === "team" ? "active" : ""}`}
            onClick={() => handleNavClick("team")}
          >
            Team
          </li>
          <li
            className={`navbutton ${activeSection === "faq" ? "active" : ""}`}
            onClick={() => handleNavClick("faq")}
          >
            FAQ
          </li>
          <li
            className={`navbutton ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => handleNavClick("contact")}
          >
            Contact US
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
