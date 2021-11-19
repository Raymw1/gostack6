import styled from "styled-components";

export const Container = styled.div`
  height: 4.2rem;
  line-height: 4.2rem;
  padding: 0 2rem;
  color: rgba(0, 0, 0, 0.6);
  background-color: #f55a5a;
  margin: 2rem 0 1rem;
  font-size: 1.3rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;

    div {
      font-size: 2.4rem;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.6);
      transform: rotate(45deg);
    }
  }
`;
