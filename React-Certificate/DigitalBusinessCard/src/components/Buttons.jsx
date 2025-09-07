import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Buttons() {
    return (
        <>
            <br />
            <a href="mailto:awsharab@gmail.com" target="_blank"><button id="email-btn"><FontAwesomeIcon icon={faEnvelope} /> Email</button></a>
            <a href="https://www.linkedin.com/in/abdallah-sharab/" target="_blank"><button id="linkedin-btn"> <FontAwesomeIcon icon={faLinkedin} /> Linkedin</button></a>
            <br />
        </>
    )
}