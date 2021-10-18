import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5rem 0;
  max-width: 82rem;
  width: 90%;
  flex-wrap: wrap;
  gap: 1.8rem;
`;

export const Repository = styled.div`
  width: 25rem;
  background-color: #fff;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;

  header {
    padding: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    i.fa-cog {
      color: #55f;
      position: absolute;
      top: 1.2rem;
      left: 1.2rem;
      font-size: 2rem;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        color: #22f;
        transform: rotate(60deg);
      }
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 1.6rem;
    }

    i.fa-trash {
      color: #f66;
      position: absolute;
      top: 1.2rem;
      right: 1.2rem;
      font-size: 2rem;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        color: #f22;
      }
    }

    strong {
      font-size: 24px;
      margin-top: 1.2rem;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 1.2rem 1.8rem;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background-color: #f5f5f5;
      }
    }
  }
`;
