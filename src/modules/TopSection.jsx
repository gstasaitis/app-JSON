import { Link } from 'react-router-dom';

const TopSection = () => {
  return (
    <div className="top">
      <div className="rent">
        <h1>Horizon</h1>
        <p>Drive like the Wind.</p>
        <br />
        <Link to="/cars">
          <button className="btn">Rent a Car</button>
        </Link>
      </div>
    </div>
  );
}

export default TopSection;
