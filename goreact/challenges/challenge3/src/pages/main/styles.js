import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 400ms;
`;

export const Modal = styled.div`
  padding: 1.6rem;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  width: 90%;
  max-width: 36rem;
  border-radius: 0.4rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    width: 100%;

    input {
      height: 3.8rem;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 0.4rem;
      padding: 0 1.8rem;
      font-size: 16px;
    }

    .buttons {
      width: 100%;
      display: flex;
      gap: 0.8rem;
    }
  }
`;

export const Button = styled.button`
  height: 3.8rem;
  flex: 1;
  border-radius: 0.4rem;
  border: 0;
  color: #fff;
  background-color: ${(props) => props.background || "#85c47c"};
  font-weight: bold;
  cursor: pointer;
`;
