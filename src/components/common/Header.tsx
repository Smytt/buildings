import { Container, Nav, Row, Col, Navbar, Card } from "react-bootstrap";

const Header = () => {
  return (
    <Card className="my-4 p-2 px-4">
        <Row>
          <Col className="text-left">
            <h4>Welcom to the best buildings.</h4>
          </Col>
          <Col className="text-end">
            <img className="avatar" src={process.env.PUBLIC_URL + 'assets/images/user.png'} />
          </Col>
        </Row>
    </Card>
  )
}

export default Header;