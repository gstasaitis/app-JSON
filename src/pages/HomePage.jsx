import { GiCartwheel } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { MdOutlinePriceCheck } from "react-icons/md";
import { GiHumanPyramid } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa6";

const HomePage = () => {
  return (
    <>
    <div className="homepage">
        <div className="homecontent">
            <h1>Horiz<GiCartwheel />n</h1>
            <h2>car rental with best customer service </h2>
            <hr />
            <p>At Horizon, we are not just a car rental company, we are a family of car enthusiasts and talented individuals who are passionate about providing the best car rental experience.
            Our team is made up of the most dedicated and fun-loving employees who are always ready to go the extra mile to make your car rental experience unforgettable.
            Join us and become a part of our dynamic team, or add your car to our fleet and start earning today!</p>
        </div>
    </div>
            <div className="video">
    <video loop autoPlay muted>
        <source src="./src/media/video/mainvid.mp4" type="video/mp4"/>
    </video>
        <h1>Why Us?</h1>
    <div className="whyus">
        <div className="cars">
        <IoCarSport />
            <p className="blue">50+</p>
            <p>Cars in Our Fleet!</p>
        </div>
        <div className="pricing">
        <MdOutlinePriceCheck />
            <p className="blue">5/5</p>
            <p>Price Rating!</p>
        </div>
        <div className="employees">
        <GiHumanPyramid />
            <p className="blue">15+</p>
            <p>Superstar Employees!</p>
        </div>
        <div className="safepay">
        <FaCreditCard />
            <p className="blue">250+</p>
            <p>Safe Transactions!</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default HomePage