import styled from "styled-components";

export const Bar = styled.div`
  padding: 0.8rem;
  position: fixed;
  top: 1.8rem;
  left: 1.8rem;
  z-index: 1;
  width: 90%;
  max-width: 30rem;
  background-color: #fff;
  border-radius: 0.4rem;

  ul {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.8rem;

      border-bottom: 1px solid #eee;
      &:last-child {
        border: 0;
      }
      .user {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        img {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
        }

        .info {
          display: flex;
          flex-direction: column;

          small {
            color: #777;
          }
        }
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        button {
          border: 0;
          background-color: transparent;
          cursor: pointer;

          img {
            width: 1.8rem;
          }
        }
      }
    }
  }
`;
