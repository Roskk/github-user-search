import React from "react";
import { UserDetails } from "./UserDetails";
import styled from "styled-components";

export const UserCard = ({ searchData }) => {
  return (
    <CardWrapper>
      {searchData.map((user, i) => (
        <Card>
          <Avatar src={`${user.avatar_url}`} />
          <div>
            <UserName>{user.login}</UserName>
            <a href={`${user.html_url}`}>{user.html_url}</a>
          </div>
          <UserDetails user={user.login} />
        </Card>
      ))}
    </CardWrapper>
  );
};

const UserName = styled.h3`
  color: #888;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: auto;
`;

const Card = styled.div`
  display: grid;
  grid-gap: 14px;
  grid-template-columns: repeat(2, 1fr);
  padding 10px;
  background: #fff;
  width: 100%;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  border-radius: 10px;
  margin-bottom: 15px;
`;

const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
`;
