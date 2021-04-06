import React, { useState } from "react";
import httpClientWrapper from "../httpClientWrapper";
import styled from "styled-components";

export const UserDetails = ({ user }) => {
  const [userData, setUserData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    const url = `https://api.github.com/users/${user}`;
    httpClientWrapper({
      method: "get",
      url: url,
    }).then((res) => {
      setUserData(res.data);
      setShowDetails(!showDetails);
    });
  };

  const {
    name,
    location,
    public_repos,
    email,
    updated_at,
    created_at,
  } = userData;
  return (
    <div>
      <DetailsButton onClick={handleClick}>
        {showDetails ? "Hide Details" : "More Details"}
      </DetailsButton>
      {showDetails ? (
        <div>
          <p>Name: {name ? name : "Not listed"}</p>
          <p>Location: {location ? location : "Not listed"}</p>
          <p>Email: {email ? email : "Not listed"}</p>
          <p>Latest Update: {updated_at}</p>
          <p>Account Created: {created_at}</p>
          <p>Number of public repos: {public_repos}</p>
        </div>
      ) : null}
    </div>
  );
};

const DetailsButton = styled.span`
  color: #0072ff;
  cursor: pointer;
`;
