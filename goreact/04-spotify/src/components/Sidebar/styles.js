import styled from "styled-components";

import { Spinner } from "../Loading/styles";

export const Container = styled.aside`
  height: 100%;
  width: 20rem;
  background: #121212;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 2.4rem;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 2.4rem;
  /* overflow-y: ${(props) => (props.playlists ? "scroll" : "initial")};
  height: ${(props) => (props.playlists ? "8rem" : "initial")}; */

  &:first-child {
    margin-top: 0;
  }
  li {
    display: flex;
    align-items: center;

    a {
      color: inherit;
      text-decoration: none;
      font-size: 1.3rem;
      line-height: 2.8rem;
      font-weight: ${(props) => (props.main ? "bold" : "normal")};
      &:hover {
        color: #fff;
      }
    }

    span {
      font-size: 1.1rem;
      text-transform: uppercase;
      line-height: 2.2rem;
      letter-spacing: 0.111rem;
      font-weight: 300;
    }

    ${Spinner} {
      height: 1.5rem;
      margin-left: 0.4rem;
    }
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 1.3rem;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 1.6rem 2.4rem;

  &:hover {
    color: #fff;
  }

  img {
    margin-right: 0.8rem;
  }
`;
