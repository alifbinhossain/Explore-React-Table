import React from "react";
import styled from "styled-components";

const GlobalSearchBox = ({ filter, setFilter }) => {
  return (
    <SearchBox>
      <p>Search</p>
      <input
        type="text"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </SearchBox>
  );
};

export default GlobalSearchBox;

const SearchBox = styled.div`
  background-color: #2e2e36;
  display: flex;
  align-items: center;
  width: max-content;
  padding: 0.8rem 1.6rem;
  border-radius: 100px;

  p {
    color: #c3c3c3;
  }

  input {
    padding: 0.4rem 0.8rem;
    margin-left: 0.4rem;
    border: none;
    background-color: transparent;
    color: #c3c3c3;

    &:focus {
      outline: none;
    }
  }
`;
