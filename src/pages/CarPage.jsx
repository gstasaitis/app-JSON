import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarWheel, GiGearStick } from "react-icons/gi";
import { MdOutlineAirlineSeatLegroomExtra } from "react-icons/md";
import { TbEngine } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../modules/Loading";
import { motion } from "framer-motion";

const CarPage = () => {
    const [carsList, setCarsList] = useState([]);
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
    }, );

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/cars/${id}`, { method: "DELETE" })
            .then(() => {
                setCarsList((prevCarsList) =>
                prevCarsList.filter((car) => car.id !== id)
                );
                fetchCarData();
            })
            .catch((error) => {
                console.error("Error deleting car:", error.message);
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
                <span>Go Back</span>
            </button>
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
                    className={`button all ${
                        filterCriteria === "All" ? "active" : ""
                    }`}
                    onClick={() => handleFilter("All")}
                    >
                    <span>All</span>
                </button>
                <button
                    className={`button ${filterCriteria === "SUV" ? "active" : ""}`}
                    onClick={() => handleFilter("SUV")}
                    >
                    <span>SUV</span>
                </button>
                <button
                    className={`button ${
                        filterCriteria === "Basic" ? "active" : ""
                    }`}
                    onClick={() => handleFilter("Basic")}
                    >
                    <span>BASIC</span>
                </button>
                <button
                className={`button ${
                        filterCriteria === "Sports" ? "active" : ""
                    }`}
                    onClick={() => handleFilter("Sports")}
                    >
                    <span>SPORTS</span>
                </button>
            </div>
            </div>
            <div className="grid">
        {!filteredCars ? (
        <Loading />
        ) : (
        filteredCars.map((car, index) => (
            <motion.div
            key={car.id}
            className="car"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
                    >
                    <div className="carname">
                        <img src={car.carPicture} alt={car.carName} />
                        <h2>{car.carName}</h2>
                        <div className="controls">
                            <button
                            onClick={() => handleDelete(car.id)}
                            className="fifth"
                            >
                            DELETE
                            </button>
                            <Link to={`/reviews/${car.id}`}>
                            <button className="fifth">
                                Show Reviews
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="description">
                        <div className="first-section">
                            <p><FaEuroSign /> {car.price}/24h</p>
                            <p><TbEngine /> {car.engineLiters}l</p>
                        </div>
                        <div className="second-section">
                            <p><GiCarWheel /> {car.carType}</p>
                            <p><BsFillFuelPumpFill /> {car.gasType}</p>
                        </div>
                        <div className="third-section">
                            <p><FaCalendarAlt /> {car.carYear}</p>
                            <p><GiGearStick /> {car.transmissionType}</p>
                            <p><MdOutlineAirlineSeatLegroomExtra /> {car.seatCount}</p>
                        </div>
                    </div>
                    </motion.div>
                ))
            )}
            </div>
        </div>
        </>
    );
};

export default CarPage;
