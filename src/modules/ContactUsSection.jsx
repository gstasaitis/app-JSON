import { MdOutlineEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";

const ContactUsSection = () => {
  return (
    <div id="contact" className="contactus">
        <div className="form">
            <h1>Contact Us!</h1>
            <form method="post" action="#">
                <div className="formtop">
                    <div className="fields">
                        <div className="fieldhalf">
                            <label htmlFor="name" name="name" id="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="fieldhalf">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        </div>
                </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><button type="submit" className="primary clearbutton">SUBMIT</button></li>
                        <li><button className="clearbutton" type="reset">CLEAR</button></li>
                    </ul>
            </form>
        </div>
        <div className="contacts">
            <h1>Contacts</h1>
            <div className="contactsection">
                <div className="email">
                    <MdOutlineEmail />
                    <h2> rental@horizon.com </h2>
                </div>
                <div className="phone">
                    <HiPhone />
                    <h2> +370 612 312 312</h2>
                </div>
                <div className="address">
                    <FaHome />
                    <div className="addressinfo">
                        <h2> 1234 Somewhere Road #5432</h2>
                        <h2> New York, NY 00000</h2>
                        <h2> United States of America</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="map">
            <h1>How to find us?</h1>
            <div className="iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105567.66321212839!2d-74.05021614634337!3d40.69188729174299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNiujorkas%2C%20Jungtin%C4%97s%20Valstijos!5e0!3m2!1slt!2slt!4v1706173643416!5m2!1slt!2slt" allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
  )
}

export default ContactUsSection