import { useState } from "react";

const AddCarPage = () => {

    const [carName, setCarName] = useState('');
    const [carPicture, setCarPicture] = useState('');
    const [price, setPrice] = useState('');
    const [carType, setCarType] = useState('Basic');
    const [carYear, setCarYear] = useState('');
    const [engineLiters, setEngineLiters] = useState('');
    const [gasType, setGasType] = useState('Petrol');
    const [transmissionType, setTransmissionType] = useState('Automatic');
    const [seatCount, setSeatCount] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle form submission (e.g., API call, state update, etc.)
    console.log('Form submitted:', {
        carName,
        carPicture,
        price,
        carType,
        carYear,
        engineLiters,
        gasType,
        transmissionType,
        seatCount,
    });
  };
  return (
    <>
    <div className="carnav">
        <button className="button">Go Back</button>
    </div>
    <div className="add-car-form">
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <h1>Car Name:</h1>
          <input placeholder="BMW 320i" type="text" value={carName} onChange={(e) => setCarName(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          <h1>Car Picture:</h1>
          <input placeholder="URL" type="text" value={carPicture} onChange={(e) => setCarPicture(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          <h1>Price:</h1>
          <input placeholder="29" type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          <h1>Car Type:</h1>
          <select value={carType} onChange={(e) => setCarType(e.target.value)}>
            <option value="Sports">Sports</option>
            <option value="SUV">SUV</option>
            <option value="Basic">Basic</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <h1>Car Year:</h1>
          <input
            placeholder="2020"
            type="text"
            value={carYear}
            onChange={(e) => setCarYear(e.target.value.replace(/\D/g, '').slice(0, 4))}
            maxLength={4}
            required
          />
        </label>
      </div>
      <div>
        <label>
          <h1>Engine Liters:</h1>
          <input
            placeholder="2.0"
            type="text"
            value={engineLiters}
            onChange={(e) => setEngineLiters(e.target.value.replace(/[^\d.,]/g, '').slice(0, 4))}
            maxLength={4}
            required
          />
        </label>
      </div>
      <div>
        <label>
          <h1>Gas Type:</h1>
          <select value={gasType} onChange={(e) => setGasType(e.target.value)}>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <h1>Transmission Type:</h1>
          <select value={transmissionType} onChange={(e) => setTransmissionType(e.target.value)}>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <h1>Seat Count:</h1>
          <input
          placeholder="4"
            type="text"
            value={seatCount}
            onChange={(e) => setSeatCount(e.target.value.replace(/\D/g, '').slice(0, 1))}
            maxLength={1}
            required
        />
        </label>
        </div>
        <div>
        <button className="ui-btn" type="submit">
            <span>
                Add Car
            </span> 
        </button>
        </div>
    </form>
    </div>
    </>
  )
}

export default AddCarPage