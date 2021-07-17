import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/buildings">Buildings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Footer;