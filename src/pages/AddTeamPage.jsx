import { Link } from "react-router-dom"

const AddTeamPage = () => {
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
        <form action="submit">
            <label htmlFor="fullname">
                <h1>Full Name</h1>
                <input type="text" placeholder="Name Surname" />
            </label>
            
            <label htmlFor="occupation">
                <h1>Occupation</h1>
                <input type="text" placeholder="Customer Support Specialist" />
            </label>
            <label htmlFor="phone">
                <h1>Phone Number</h1>
                <input type="number" placeholder="370 6123 1231" />
            </label>
            <label htmlFor="picture">
                <h1>Profile Picture</h1>
                <input type="url" placeholder="URL" />
                </label>
            <button className="ui-btn">
                <span>APPLY!</span>
            </button>
        </form>
    </div>
    </>
  )
}

export default AddTeamPage