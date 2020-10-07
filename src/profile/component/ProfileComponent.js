import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const Profile = ({ members, handleName, bio, profession }) => {
  const profileStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  return (
    <div style={profileStyle}>
      {members.map(({ FullName, Photo }, i) => (
        <Card
          style={{
            width: "25rem",
            margin: "20px",
            background: "grey",
          }}
          key={i}
        >
          <Card.Img variant="top" src={Photo} height="350px" />
          <Card.Body>
            <h2 className="fullname">
              <strong>{FullName}</strong>
            </h2>

            <h4>Bio:{bio}:</h4>
            <br />
            <h4>Profession:{profession}</h4>

            <Button
              className="followbtn"
              variant="primary"
              onClick={() => handleName(FullName)}
            >
              Follow
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

Profile.propTypes = {
  handleName: PropTypes.func,
  members: PropTypes.array,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};
Profile.defaultProps = {
  bio: " Set your biographie here",
  profession: " Click to set your profession",
};
