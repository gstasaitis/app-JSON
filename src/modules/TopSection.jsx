import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from "framer-motion";

const TopSection = () => {
  useEffect(() => {
    const h1 = document.querySelector('.horizon-main h1');
    const texts = ['Horizon', 'Rent', 'Drive', 'Enjoy'];
    let index = 0;
    
    const changeText = () => {
      h1.textContent = texts[index];
      index = (index + 1) % texts.length;
    };
    const intervalId = setInterval(changeText, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      className="top"
      initial={{ x: -450, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      >
      <div className="rent">
        <div className="horizon-main">
          <h1>Horizon</h1>
        </div>
        <p>Drive like the Wind.</p>
        <br />
        <Link to="/cars">
          <button className="btn">Rent a Car</button>
        </Link>
      </div>
    </motion.div>
  );
}

export default TopSection;
