import { useEffect, useState } from "react";
import Loading from "../modules/Loading";
import { FaInstagram, FaPhone, FaTiktok } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { LuMailCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const TeamPage = () => {
    const [teamList, setTeamList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCarData = () => {
    fetch("http://localhost:4000/employees")
        .then((res) => res.json())
        .then((data) => {
        setTeamList(data);
        setLoading(false); 
        });
    };

    useEffect(() => {
    const timeoutId = setTimeout(() => {
        fetchCarData();
    }, 500);

    return () => clearTimeout(timeoutId);
    }, []);

  return (
    <>
    <div className="team-page">
    <div className="carnav">
        <Link to="/">
        <button className="button">
            <span>Go Back</span>
        </button>
        </Link>
        <Link to="/add-team">
        <button className="button">
            <span>Join our team!</span>
        </button>
        </Link>
    </div>
    </div>
    <div className="team-members">
    {loading ? (
        <Loading />
    ) : (
        teamList.map((member) => (
        <div className="teamcard" key={member.id}>
            <img className="profile" src={member.imgurl} alt="profile picture" />
            <div className="teamcard__content">
            <div className="teamcard__content-inner">
                <div className="teamcard__title">
                <p className="fullname">{member.name}</p>
                </div>
                <div className="teamcard__description">
                <p>{member.ocupation}</p>
                <p>
                    <FaPhone /> +{member.phone}
                </p>
                <div className="socials">
                    <a href=""><FaTiktok /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><CiLinkedin /></a>
                    <a href=""><FaFacebookSquare /></a>
                    <a href=""><LuMailCheck /></a>
                </div>
                </div>
            </div>
            </div>
        </div>
        ))
    )}
    </div>
</>
);
};

export default TeamPage;
