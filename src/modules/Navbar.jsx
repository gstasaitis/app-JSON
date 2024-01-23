import  { useState, useEffect } from "react";
import { GiCartwheel } from "react-icons/gi";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const homeSection = document.getElementById("home");
    const carsSection = document.getElementById("cars");
    const teamSection = document.getElementById("team");
    const feedbackSection = document.getElementById("feedback");
    const faqSection = document.getElementById("faq");
    const contactSection = document.getElementById("contact");

    if (scrollPosition < carsSection.offsetTop) {
    setActiveSection("home");
    } else if (scrollPosition < teamSection.offsetTop) {
    setActiveSection("cars");
    } else if (scrollPosition < feedbackSection.offsetTop) {
    setActiveSection("team");
    } else if (scrollPosition < faqSection.offsetTop) {
    setActiveSection("feedback");
    } else if (scrollPosition < contactSection.offsetTop) {
    setActiveSection("faq");
    } else {
    setActiveSection("contact");
    }
    };

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
}, []);

return (
      <div className="glass">
  <div className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="logo">
        <h3>
        Horiz<GiCartwheel />n
        </h3>
        <h5>Rent a CAR</h5>
      </div>
      <div className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li className={activeSection === "home" ? "active" : ""}>Home</li>
        <li className={activeSection === "cars" ? "active" : ""}>Cars</li>
        <li className={activeSection === "team" ? "active" : ""}>Team</li>
        <li className={activeSection === "feedback" ? "active" : ""}>Feedback</li>
        <li className={activeSection === "faq" ? "active" : ""}>FAQ</li>
        <li className={activeSection === "contact" ? "active" : ""}>Contact US</li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
