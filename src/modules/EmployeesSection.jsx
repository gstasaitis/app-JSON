import Team from "./Team"

const EmployeesSection = () => {
  return (
  <div className="employeeslist">
      <div className="teamhead">
          <h1>Team</h1>
      </div>
      <div className="cards">
        <Team/>
      </div>
        <button>JOIN OUR TEAM NOW!</button>
    </div>
  )
}

export default EmployeesSection