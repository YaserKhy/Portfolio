import React from 'react'
import { Container, Image } from "react-bootstrap";

function ContactCard({ icon, link, val }) {
  return (
    <Container className="social d-flex align-items-center justify-content-center m-4">
      <div className="socialLogo d-flex align-items-center justify-content-center text-center">
        <Image src={icon}/>
      </div>

      <div className="socialLink fw-medium m-auto py-1 px-0">
        <a href={link} target="_blank" rel="noreferrer">{val}</a>
      </div>
    </Container>
  )
}

export default ContactCard