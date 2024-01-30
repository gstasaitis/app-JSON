import { Link } from "react-router-dom"
import { motion } from "framer-motion";


const Pricing = () => {

    const planVariants = {
        hidden: { y: -150 },
        visible: { y: 0 },
    };

  return (
    <div id="prices" className="pricinglist">
        <div className="pricinghead">
            <h1>PRICES</h1>
        </div>
            <div id="pricing-table">
                <motion.div
                    className="plan plan1"
                    variants={planVariants}
                    initial="hidden"
                    animate="visible"
                    >
                        <div className="header">SPORTS</div>
                        <div className="price">From</div>  
                        <div className="price">$59</div>  
                        <div className="monthly">24h</div>      
                            <ul>
                                <li><b>5,000km</b></li>
                                <li>Smoke Free</li>
                                <li>Bluetooth SYNC</li>
                                <li>Back-up Camera</li>      
                            </ul>
                        <Link to="/cars">
                        <a className="signup" href="">RENT</a>         
                        </Link>
                    </motion.div>

                    <motion.div
                    className="plan plan2 popular-plan"
                    variants={planVariants}
                    initial="hidden"
                    animate="visible"
                    >
                        <div className="header">ECONOMY</div>
                        <div className="price">From</div>
                        <div className="price">$29</div>
                        <div className="monthly">24h</div>  
                            <ul>
                                <li><b>Unlimited Range</b></li>
                                <li>Smoke Free</li>
                                <li>Bluetooth SYNC</li>
                                <li>Back-up Camera</li>       
                                <li>4 Doors</li>       
                            </ul>
                        <Link to="/cars">
                        <a className="signup" href="">RENT</a>         
                        </Link>
                    </motion.div>

                    <motion.div
                    className="plan plan3"
                    variants={planVariants}
                    initial="hidden"
                    animate="visible"
                    >
                        <div className="header">SUV</div>
                        <div className="price">From</div>
                        <div className="price">$19</div>
                        <div className="monthly">24h</div>
                            <ul>
                                <li><b>10,000km</b></li>
                                <li>Smoke Free</li>
                                <li>Bluetooth SYNC</li>
                                <li>Back-up Camera</li>      
                            </ul>
                        <Link to="/cars">
                        <a className="signup" href="">RENT</a>         
                        </Link>
                    </motion.div>
        </div>
    </div>
    )
}

export default Pricing