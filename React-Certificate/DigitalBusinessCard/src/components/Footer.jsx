import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/AbdallahSharab" className="icons" target="_blank"><FontAwesomeIcon icon={faSquareGithub} /></a>
            <a href="https://www.instagram.com/abdallahsharab2/" className="icons" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} /></a>
            <a href="https://www.facebook.com/abdulla.sharab/" className="icons" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} /></a>
        </footer>
    )
}