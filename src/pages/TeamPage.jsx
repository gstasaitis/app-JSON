import { FaInstagram, FaPhone, FaTiktok } from "react-icons/fa6"
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { LuMailCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const TeamPage = () => {
  return (
    <>
    <div className='team-page'>
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
     <div className="teamcard">
     <img className="profile" src="https://images.unsplash.com/photo-1628737551925-f63c4c6b2c72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlnZ2F8ZW58MHx8MHx8fDA%3D" alt="" />
         <div className="teamcard__content">
             <div className="teamcard__content-inner">
                 <div className="teamcard__title">
                     <p className="fullname">
                     Morgan Freeman
                     </p>
                     </div>
                     <div className="teamcard__description">
                     <p>Customer Support Specialist</p>
                     <p><FaPhone /> +37012312312</p>
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
 <div className="teamcard">
         <img className="profile" src="https://images.unsplash.com/photo-1595139280770-95b6de5f0635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsaWVufGVufDB8fDB8fHww" alt="" />
     <div className="teamcard__content">
         <div className="teamcard__content-inner">
             <div className="teamcard__title">
             <p className="fullname">
                     yoda
                     </p>
             </div>
             <div className="teamcard__description">
             <p>Customer Support Specialist</p>
             <p><FaPhone /> +37012312312</p>
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
 <div className="teamcard">
         <img className="profile" src="https://images.unsplash.com/photo-1585261941984-0145bb423997?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxpZW58ZW58MHx8MHx8fDA%3D" alt="" />
     <div className="teamcard__content">
         <div className="teamcard__content-inner">
             <div className="teamcard__title">
             <p className="fullname">
                     John cena
                     </p>
             </div>
             <div className="teamcard__description">
             <p>Customer Support Specialist</p>
             <p><FaPhone /> +37012312312</p>
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
 </>
  )
}

export default TeamPage