import { useState, useEffect } from 'react';
import { GiCartwheel } from 'react-icons/gi';
import { IoCarSport } from 'react-icons/io5';
import { MdOutlinePriceCheck } from 'react-icons/md';
import { GiHumanPyramid } from 'react-icons/gi';
import { FaCreditCard } from 'react-icons/fa6';
import HomeVideo from '../modules/HomeVideo';

const HomePage = () => {
    const [carsInFleet, setCarsInFleet] = useState(0);
    const [priceRating, setPriceRating] = useState(0);
    const [employeesCount, setEmployeesCount] = useState(0);
    const [transactionsCount, setTransactionsCount] = useState(0);

    useEffect(() => {
    const counts = {
        cars: { current: 0, target: 50, step: 1 },
        priceRating: { current: 0, target: 5, step: 0.1 },
        employees: { current: 0, target: 15, step: 1 },
        transactions: { current: 0, target: 250, step: 10 },
    };

    const intervals = Object.entries(counts).map(([key, { current, target, step }]) => {
        return setInterval(() => {
            current += step;
            if (current >= target) {
            current = target;
            clearInterval(intervals[key]);
            }
            switch (key) {
            case 'cars':
                setCarsInFleet(Math.round(current));
                break;
            case 'priceRating':
                setPriceRating(current.toFixed(1));
                break;
            case 'employees':
                setEmployeesCount(Math.round(current));
                break;
            case 'transactions':
                setTransactionsCount(Math.round(current));
                break;
            }
        }, 50);
    });

    return () => {
        intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <>
    <div id="home" className="homepage">
    <div className="homecontent">
        <div className="carrental">
        <h1>
            Horiz
            <GiCartwheel />
            n
        </h1>
        <h2>Car rental with the best customer service! </h2>
        <p>
            At Horizon, we are not just a car rental company; we are a family of car enthusiasts and talented individuals who are passionate about providing the best car rental experience. Our team is made up of the most dedicated and fun-loving employees who are always ready to go the extra mile to make your car rental experience unforgettable. Join us and become a part of our dynamic team, or add your car to our fleet and start earning today!
        </p>
        </div>
        <HomeVideo />
    </div>
    </div>
    <div className="whyus">
        <div className="flexinwhyus">
    <div className="cars">
        <IoCarSport />
        <p className="blue">{carsInFleet > 0 ? carsInFleet : '1'}+</p>
        <p>Cars in Our Fleet!</p>
    </div>
    <div className="pricing">
        <MdOutlinePriceCheck />
        <p className="blue">{priceRating > 0 ? priceRating : '1'}</p>
        <p>Price Rating!</p>
    </div>
    <div className="employees">
        <GiHumanPyramid />
        <p className="blue">{employeesCount > 0 ? employeesCount : '1'}</p>
        <p>Superstar Employees!</p>
    </div>
    <div className="safepay">
        <FaCreditCard />
        <p className="blue">{transactionsCount > 0 ? transactionsCount : '1'}+</p>
        <p>Safe Transactions!</p>
    </div>
    </div>
    </div>
    </>
  );
};

export default HomePage;
