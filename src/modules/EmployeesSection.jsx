import { Link } from "react-router-dom"
import Team from "./Team"

const EmployeesSection = () => {
  return (
  <div id="team" className="employeeslist">
      <div className="teamhead">
          <h1>Recent Team Members</h1>
      </div>
      <div className="cards">
        <Team/>
      </div>
      <Link to="/team">
        <button className="clearbutton">JOIN OUR TEAM NOW!</button>
        </Link>
    </div>
  )
}

export default EmployeesSection