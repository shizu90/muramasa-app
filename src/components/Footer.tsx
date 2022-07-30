import { FaGithub } from "react-icons/fa"
import { FooterContainer } from "../styles/components/Footer" 

export default function Footer() {
    return (
        <FooterContainer>
            <h4>Developed by @shizu90</h4>
            <ul>
                <li><a href="https://github.com/shizu90" target="_blank"><FaGithub/></a></li>
            </ul>
        </FooterContainer>
    )
}