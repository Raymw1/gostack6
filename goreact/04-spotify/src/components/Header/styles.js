import styled from "styled-components";

import SearchIcon from "../../assets/images/search.svg";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1.2rem;
  height: 2.4rem;
  width: 17.4rem;
  padding: 0.6rem 0.7rem 0.6rem 2.6rem;
  background: #fff url(${SearchIcon}) no-repeat 0.7rem center;

  input {
    width: 100%;
    font-size: 1.3rem;
    color: #121212;
    border: 0;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.3rem;

  img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
  }
`;
