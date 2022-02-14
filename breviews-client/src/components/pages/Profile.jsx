import React from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AuthService from "../../services/auth.services";
import "./style/profile.scss";
import Card from "react-bootstrap/Card";

function Profile() {
  const [userDetails, setUserDetails] = useState();
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    let user_id = localStorage.getItem("user_id");

    AuthService.getCurrentUser(user_id)
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((err) => {
        setAuthError(err.message);
      });
  }, []);

  if (authError) {
    return <h1>{authError}</h1>;
  }

  let member_since = userDetails?.createdAt.split("T")[0];

  return (
    <div className="profile-wrapper">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Card
        bg="light"
        text="dark"
        style={{ width: "80%" }}
        className="mb-2"
        style={{ margin: "0 auto", minHeight: "360px" }}
      >
        <Card.Header>Your Profile</Card.Header>
        <Card.Body>
          <Card.Title>
            Welcome <strong>{userDetails?.email}</strong>
          </Card.Title>
          <Card.Text>Member since {member_since}</Card.Text>
          <Card.Text>
            You have an access to leave reviews to any bootcamp in this website.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
