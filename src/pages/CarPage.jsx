import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarWheel, GiGearStick } from "react-icons/gi";
import { MdOutlineAirlineSeatLegroomExtra } from "react-icons/md";
import { TbEngine } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../modules/Loading";

const CarPage = () => {

    const [carsList, setCarsList] = useState([])

    const [filteredCars, setFilteredCars] = useState([]);
    const [filterCriteria, setFilterCriteria] = useState("All");

    const fetchCarData = () => {
        fetch("http://localhost:4000/cars")
        .then((res) => res.json())
        .then((data) => {
            setCarsList(data);
            setFilteredCars(data);
        });
    };

    useEffect(() => {
        const savedFilterCriteria = localStorage.getItem("filterCriteria");
        if (savedFilterCriteria) {
        setFilterCriteria(savedFilterCriteria);
        }
    
        fetchCarData();
    }, []);

    useEffect(() => {
        localStorage.setItem("filterCriteria", filterCriteria);
        handleFilter(filterCriteria);
    }, [filterCriteria]);

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/cars/${id}`, { method: 'DELETE' })
            .then(() => {
            setCarsList((prevCarsList) => prevCarsList.filter((car) => car.id !== id));
            })
            .catch((error) => {
            console.error('Error deleting car:', error.message);
            });
        };

        const handleFilter = (criteria) => {
            setFilterCriteria(criteria);
        
            if (criteria === "All") {
                setFilteredCars(carsList);
            } else {
                const filtered = carsList.filter((car) => car.carType === criteria);
                setFilteredCars(filtered);
            }
        };
    

return (
    <>
    <div className="carnav">
        <Link to="/">
        <button className="button">
            <span>Go Back</span></button>
        </Link>
        <Link to="/add-car">
        <button className="button">
            <span>Add your Car!</span>
            </button>
        </Link>
    </div>
    <div className="carpage">
        <div className="filtersection">
            <div className="buttons">
            <button
                className={`button all ${filterCriteria === "All" ? "active" : ""}`}
                onClick={() => handleFilter("All")}>
                <span>All</span>
            </button>
            <button
                className={`button ${filterCriteria === "SUV" ? "active" : ""}`}
                onClick={() => handleFilter("SUV")}>
                <span>SUV</span>
            </button>
            <button
                className={`button ${filterCriteria === "Basic" ? "active" : ""}`}
                onClick={() => handleFilter("Basic")}>
                <span>BASIC</span>
            </button>
            <button
                className={`button ${filterCriteria === "Sports" ? "active" : ""}`}
                onClick={() => handleFilter("Sports")}>
                <span>SPORTS</span>
            </button>
        </div>
    </div>
        <div className="grid">
        {!filteredCars ? (
            <Loading/> 
        ) : (
            filteredCars.map((cars) => (
            <div className="car" key={cars.id}>
                <div className="carname">
                <img src={cars.carPicture} alt={cars.carName} />
                <h2>{cars.carName}</h2>
                    <div className="controls">
                        <button onClick={() => handleDelete(cars.id)} className="fifth">DELETE</button>
                    </div>
                </div>
                <div className="description">
                    <div className="first-section">
                        <p><FaEuroSign /> {cars.price}/24h</p>
                        <p><TbEngine /> {cars.engineLiters}l</p>
                    </div>
                    <div className="second-section">
                        <p><GiCarWheel/> {cars.carType}</p>
                        <p><BsFillFuelPumpFill /> {cars.gasType}</p>
                    </div>
                    <div className="third-section">
                        <p><FaCalendarAlt /> {cars.carYear}</p>
                        <p><GiGearStick /> {cars.transmissionType}</p>
                        <p><MdOutlineAirlineSeatLegroomExtra /> {cars.seatCount}</p>
                    </div>
                </div>
            </div>
            ))
            )}
        </div>
</div>
    </>
    )
}

export default CarPage