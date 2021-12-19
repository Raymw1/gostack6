import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: scroll;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 2rem;

    h1 {
      font-size: 2rem;
    }

    div {
      button {
        margin-left: 1rem;
      }
    }
  }
`;

export const Project = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin: 0 0 2rem;
  padding: 2rem;

  p {
    font-size: 1.8rem;
  }
`;
