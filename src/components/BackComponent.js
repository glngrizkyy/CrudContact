import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to="/">
          <Button color="link">
            <FontAwesomeIcon icon={faChevronLeft} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponent;
