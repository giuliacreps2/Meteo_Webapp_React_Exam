import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MySearch() {
  const [cerca, setCerca] = useState("");
  const navigate = useNavigate();

  const handleCerca = () => {
    if (cerca.trim()) {
      navigate(`/details/${cerca}`);
    }
  };

  return (
    <Navbar className="bg-body-info justify-content-center">
      <Form>
        <Row className="mt-2">
          <Col xs="auto">
            <Form.Control type="text" placeholder="Cerca la tua Città" className="px-4 mr-sm-2" value={cerca} onChange={(e) => setCerca(e.target.value)} />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="text-center" onClick={handleCerca}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default MySearch;
