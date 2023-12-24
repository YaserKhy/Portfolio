import { Container } from "react-bootstrap";

export default function ContactCard({icon,link,val}) {
    return (
        <Container className="social d-flex align-items-center justify-content-center m-4">
            <div className="socialLogo d-flex align-items-center justify-content-center fs-2 text-center">
                <i className={icon} style={{color:'#252bc1'}}></i>
            </div>

            <div className="socialLink fw-medium m-auto py-3 px-0">
                <a href={link} target="_blank" rel="noreferrer">{val}</a>
            </div>
        </Container>
    )
}