import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarWheel, GiGearStick } from "react-icons/gi";
import { MdOutlineAirlineSeatLegroomExtra } from "react-icons/md";
import { TbEngine } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa6";

const CarPage = () => {
  return (
    <>
    <div className="carnav">
        <button className="button">Go Back</button>
        <button className="button">Add your Car!</button>
    </div>
    <div className="carpage">
    <div className="filtersection">
        <div className="buttons">
            <button className="button all active">All</button>
            <button className="button white">SUV</button>
            <button className="button grey">BASIC</button>
            <button className="button blue">SPORTS</button>
        </div>
    </div>
        <div className="grid">

            <div className="car">
                <div className="carname">
                <h2>Peugeot 3008</h2>
                <img src="https://donauto.lt/img/65e2e783eb06b9048689eef0a901407c.webp" alt="" />
                    <div className="controls">
                        <button className="fifth">DELETE</button>
                    </div>
                </div>
                <div className="description">
                    <p><FaEuroSign /> 37/24h</p>
                    <p><GiCarWheel/> SUV</p>
                    <p><FaCalendarAlt /> 2023</p>
                    <p><TbEngine /> 1.9 l</p>
                    <p><BsFillFuelPumpFill /> Petrol</p>
                    <p><GiGearStick /> Automatic</p>
                    <p><MdOutlineAirlineSeatLegroomExtra /> 5</p>
                </div>
            </div>
            <div className="car">
                <div className="carname">
                <h2>Peugeot 3008</h2>
                <img src="https://donauto.lt/img/65e2e783eb06b9048689eef0a901407c.webp" alt="" />
                    <div className="controls">
                        <button className="fifth">DELETE</button>
                    </div>
                </div>
                <div className="description">
                    <p><FaEuroSign /> 37/24h</p>
                    <p><GiCarWheel/> SUV</p>
                    <p><FaCalendarAlt /> 2023</p>
                    <p><TbEngine /> 1.9 l</p>
                    <p><BsFillFuelPumpFill /> Petrol</p>
                    <p><GiGearStick /> Automatic</p>
                    <p><MdOutlineAirlineSeatLegroomExtra /> 5</p>
                </div>
            </div>
            <div className="car">
                <div className="carname">
                <h2>Peugeot 3008</h2>
                <img src="https://donauto.lt/img/65e2e783eb06b9048689eef0a901407c.webp" alt="" />
                    <div className="controls">
                        <button className="fifth">DELETE</button>
                    </div>
                </div>
                <div className="description">
                    <p><FaEuroSign /> 37/24h</p>
                    <p><GiCarWheel/> SUV</p>
                    <p><FaCalendarAlt /> 2023</p>
                    <p><TbEngine /> 1.9 l</p>
                    <p><BsFillFuelPumpFill /> Petrol</p>
                    <p><GiGearStick /> Automatic</p>
                    <p><MdOutlineAirlineSeatLegroomExtra /> 5</p>
                </div>
            </div>
            <div className="car">
                <div className="carname">
                <h2>Peugeot 3008</h2>
                <img src="https://donauto.lt/img/65e2e783eb06b9048689eef0a901407c.webp" alt="" />
                    <div className="controls">
                        <button className="fifth">DELETE</button>
                    </div>
                </div>
                <div className="description">
                    <p><FaEuroSign /> 37/24h</p>
                    <p><GiCarWheel/> SUV</p>
                    <p><FaCalendarAlt /> 2023</p>
                    <p><TbEngine /> 1.9 l</p>
                    <p><BsFillFuelPumpFill /> Petrol</p>
                    <p><GiGearStick /> Automatic</p>
                    <p><MdOutlineAirlineSeatLegroomExtra /> 5</p>
                </div>
            </div>
            
          
        </div>
</div>
    </>
  )
}

export default CarPage