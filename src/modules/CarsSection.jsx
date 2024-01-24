import CarSlideShow from "./CarSlideShow";
import Pricing from "./Pricing";

const CarsSection = () => {
  return (
    <>
    <div className="carsection">
        <div className="carsbar">
            <div className="bar">
                <h1>Our Top Cars</h1>
            </div>
            <div className="carscontent">
                <CarSlideShow/>
            </div>
        </div>
            <button>RENT NOW!</button>
            <Pricing/>
    </div>
    </>
  )
}

export default CarsSection