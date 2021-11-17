import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  background-size: 100% 25rem, 100%;
  background-repeat: no-repeat;
  background-position: top;
  padding: 0 2rem;
`;
