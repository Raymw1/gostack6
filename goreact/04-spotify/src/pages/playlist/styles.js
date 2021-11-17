import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 22rem;
    height: 22rem;
  }

  div {
    span {
      text-transform: uppercase;
      font-size: 1.1rem;
      letter-spacing: 0.111rem;
      font-weight: 300;
    }

    h1 {
      margin-top: 0.8rem;
      font-size: 4.8rem;
    }

    p {
      margin-top: 0;
      color: #b3b3b3;
      font-size: 1.1rem;
      letter-spacing: 0.111rem;
      text-transform: uppercase;
    }

    button {
      background-color: #1db854;
      height: 3.2rem;
      border-radius: 1.6rem;
      color: #fff;
      line-height: 3.2rem;
      padding: 0 3.6rem;
      border: 0;
      margin-top: 0.8rem;
      font-size: 1.2rem;
      letter-spacing: 0.111rem;
      cursor: pointer;
    }
  }
`;

export const SongList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 2rem;

  thead th {
    font-size: 1.1rem;
    color: #b3b3b3;
    letter-spacing: 0.111rem;
    font-weight: normal;
    text-transform: uppercase;
    padding: 0.5rem 1rem;

    &:last-child {
      text-align: right;
    }
  }

  tbody {
    td {
      border-top: 1px solid #282828;
      font-size: 1.3rem;
      padding: 0 1rem;
      line-height: 4rem;

      &:first-child {
        width: 8rem;
        text-align: right;
        div {
          display: flex;
          justify-content: flex-end;
        }
      }

      &:last-child {
        text-align: right;
      }
    }
    tr:hover td {
      background-color: #282828;
    }
  }
`;
