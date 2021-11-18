import styled from "styled-components";
import { Link } from "react-router-dom";

import { Spinner } from "../../components/Loading/styles";

export const Container = styled.div`
  flex: 1;
  margin-top: 11rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 4.8rem;

  ${Spinner} {
    height: 2.4rem;
  }
`;

export const List = styled.div`
  margin-top: 2rem;
  display: flex;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  width: 25rem;
  text-decoration: none;

  img {
    height: 25rem;
  }

  strong {
    font-size: 1.3rem;
    margin-top: 0.8rem;
    color: #fff;
  }

  p {
    line-height: 2.2rem;
    margin-top: 0.4rem;
    font-size: 1.3rem;
    color: #b3b3b3;
  }

  &:hover img {
    opacity: 0.4;
  }

  &:first-child {
    margin: 0;
  }
`;
