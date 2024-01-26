import { Link } from "react-router-dom";
import CarSlideShow from "./CarSlideShow";
import Pricing from "./Pricing";

const CarsSection = () => {
  return (
    <>
    <div id="cars" className="carsection">
        <div className="carsbar">
            <div className="bar">
                <h1>Our Top Cars</h1>
            </div>
            <div className="carscontent">
                <CarSlideShow/>
            </div>
        </div>
        <div className="rentcars">
        <Link to="/cars">
            <button className="btn">RENT NOW!</button>
        </Link>
        </div>
            <Pricing/>
    </div>
    </>
  )
}

export default CarsSection