import { useState } from "react";
import { Link } from "react-router-dom";

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const API = "http://localhost:4000/cars";

    const postCarData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        carName,
        carPicture,
        price,
        carType,
        carYear,
        engineLiters,
        gasType,
        transmissionType,
        seatCount,
      })
    };

    try {
      setLoading(true);
      const response = await fetch(API, postCarData);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Car added successfully:', result);


    } catch (error) {
      console.error('Error adding car:', error.message);
      setError('Failed to add car. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="carnav">
        <Link to="/cars">
          <button className="button">
            <span>Go Back</span>
          </button>
        </Link>
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
        {error && <div className="error-message">{error}</div>}
        <button className="ui-btn" type="submit" disabled={loading}>
            <span>
              <span>{loading ? 'Adding Car...' : 'Add Car'}</span>
            </span> 
        </button>
        </div>
    </form>
    </div>
    </>
  )
}

export default AddCarPage