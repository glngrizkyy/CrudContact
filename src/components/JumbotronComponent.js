import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    title: state.users.title,
  };
};

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">{props.title}</h1>
          <p className="lead">
            Ini adalah Menu ADMIN, untuk melihat pendaftaran akun diBeliTiket.
          </p>
          <hr className="my-2" />
          <p>
            User baru akan terlihat dari NAMA LENGKAP, UMUR, dan FOTO PROFILE,
            setelah terjadinya user me register.
          </p>
          <p className="lead">
            <Button color="link">
              <FontAwesomeIcon icon={faInfoCircle} /> Learn More
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
