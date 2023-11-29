import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Me contate</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/channel/UCnOP4Bf259gwuUtsw39g4uA"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>Victor Melo</span>
          </h2>
        </a>

        <a
          href="https://wa.link/bywzv3"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+55 11 98305-2239</span>
          </h2>
        </a>

        <a href="https://instagram.com/vitin_homem?igshid=YWYwM2I1ZDdmOQ=="
         className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>Vitin_Homem</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
