import { Link } from "react-router-dom"

const Pricing = () => {
  return (
    <div id="prices" className="pricinglist">
        <div className="pricinghead">
            <h1>PRICES</h1>
        </div>
            <div id="pricing-table">
                <div className="plan plan1">
                    <div className="header">SPORTS</div>
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
                </div >
                    <div className="plan plan2 popular-plan">
                    <div className="header">ECONOMY</div>
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
                </div>
                <div className="plan plan3">
                    <div className="header">SUV</div>
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
            </div>
        </div>
    </div>

    )
}

export default Pricing