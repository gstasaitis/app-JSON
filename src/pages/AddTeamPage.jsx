import { Link } from "react-router-dom";
import { useState } from "react";

const AddTeamPage = () => {
  const [fullName, setFullName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [phone, setPhone] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const API = "http://localhost:4000/employees";

    const postTeamMemberData = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
            body: JSON.stringify({
            name: fullName,
            ocupation: occupation,
            phone: phone,
            imgurl: pictureUrl,
        })
    };

    try {
        const response = await fetch(API, postTeamMemberData);

        if (!response.ok) {
        throw new Error('Network response was not ok');
        }

        setFullName('');
        setOccupation('');
        setPhone('');
        setPictureUrl('');

        alert("Welcome to the CREW!");

    } catch (error) {
        console.error('Error adding team member:', error.message);
    }
    };

return (
<>
    <div className="carnav">
    <Link to="/team">
        <button className="button">
        <span>Go Back</span>
        </button>
    </Link>
    </div>
    <div className="applyform">
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">
        <h1>Full Name</h1>
        <input
            type="text"
            placeholder="Name Surname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
        />
        </label>

        <label htmlFor="occupation">
        <h1>Occupation</h1>
        <input
            type="text"
            placeholder="Customer Support Specialist"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
        />
        </label>

        <label htmlFor="phone">
        <h1>Phone Number</h1>
        <input
            type="text"
            placeholder="370 6123 1231"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        </label>

        <label htmlFor="picture">
        <h1>Profile Picture</h1>
        <input
            type="url"
            placeholder="URL"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
        />
        </label>

        <button className="ui-btn" type="submit">
        <span>APPLY!</span>
        </button>
    </form>
    </div>
</>
    );
};

export default AddTeamPage;
