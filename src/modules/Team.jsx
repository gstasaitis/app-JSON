import { FaInstagram, FaPhone, FaTiktok } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { LuMailCheck } from "react-icons/lu";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const Team = () => {
    const [teamList, setTeamList] = useState([]);

    const fetchTeamData = () => {
    fetch("http://localhost:4000/employees")
        .then((res) => res.json())
        .then((data) => {
        setTeamList(data);
        });
    };

    useEffect(() => {
    fetchTeamData();
    }, []);

    const displayTeamMembers = teamList.slice(-4);

    return (
    <>
    {teamList.length === 0 ? (
        <Loading />
    ) : (
        displayTeamMembers.map((member) => (
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
    </>
    );
};

export default Team;