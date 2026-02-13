import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <Navbar className="navbar navbar-expand-lg bg-body-tertiary">
      <Container fluid>
        <Col></Col>
        <Col xs={10} className="text-center">
          <Link to={`/`} style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
            METEON
          </Link>
        </Col>
        <Col></Col>
      </Container>
    </Navbar>
  );
}

export default MyNav;
