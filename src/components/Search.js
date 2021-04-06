import React, { useState } from "react";
import { UserCard } from "./UserCard";
import styled from "styled-components";
import httpClientWrapper from "../httpClientWrapper";

export const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let timer = null;

  // Prevent request from going out on every keypress
  const handleChange = (e) => {
    setIsLoading(true)
    const val = e.target.value;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (val) {
        doneTyping(val);
      } else {
        setSearchData([]);
      }
    }, 300);
  };

  // Send call once user stops typing
  const doneTyping = (val) => {
    const url = `https://api.github.com/search/users?q=${val}`;
    httpClientWrapper({
      method: "get",
      url: url,
    }).then((res) => {
      setIsLoading(false)
      setSearchData(res.data.items);
      if (val && res.data.total_count === 0) {
        setNoResults(true);
      }
    }).catch(err => {
      alert('Oops, there was an error')
    });
  };

  return (
    <>
      <H1>Search Github Users</H1>
      <SearchBar placeholder="Search User" onChange={handleChange} />
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <UserCard searchData={searchData} />
          {noResults ? <H3>No Results</H3> : null}
        </>
      )}
    </>
  );
};

const H1 = styled.h1`
  text-align: center;
  color: #fff;
`;

const H3 = styled.h3`
  text-align: center;
  color: #fff;
`;

const SearchBar = styled.input`
  background: #fff;
  display: flex;
  border: 1px solid transparent;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  height: 39px;
  width: 400px;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 0 auto;
  padding: 0 30px;
  margin-bottom: 30px;
`;
