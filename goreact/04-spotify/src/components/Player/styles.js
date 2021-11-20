import styled from "styled-components";

export const Container = styled.div`
  height: 7.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282828;
  padding: 1.2rem;
`;

export const Current = styled.div`
  width: 22rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  img {
    width: 4.8rem;
    height: 4.8rem;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    span {
      font-size: 1.3rem;
      color: #fff;
    }

    small {
      font-size: 1.1rem;
      color: #b3b3b3;
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  button {
    background: transparent;
    border: 0;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
  gap: 1.6rem;

  span {
    font-size: 1.1rem;
    color: #b3b3b3;
  }
`;

export const ProgressSlider = styled.div`
  width: 50rem;
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
  margin-right: 2rem;

  img {
    margin-right: 0.4rem;
  }
`;
