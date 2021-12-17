import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 0.2rem 1rem 0 rgba(0, 0, 0, 0.2);
  padding: 4rem;
  width: ${(props) => (props.size === "big" ? 600 : 400)}px;

  h1 {
    font-size: 2.6rem;
    font-weight: 500;
    text-align: center;
    margin: 0 0 1rem;
  }


  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    > span {
      color: #b9bbbe;
      font-size: 1.4rem;
      line-height: 1.6rem;
      font-weight: 600;
      margin-top: 1.5rem;
      text-transform: uppercase;
    }

    > input {
      height: 4rem;
      padding: 1rem;
      border-radius: 0.3rem;
      border: 1px solid rgba(0, 0, 0, 0.3);
      background-color: rgba(0, 0, 0, 0.1);
      color: #f6f6f6;
      margin-top: 0.8rem;
      transition: border 0.15s ease;
      font-size: 1.6rem;

      &:focus {
        #7289DA;
      }
    }

    > button {
      margin: 2rem 0 0;
    }
  }
`;
