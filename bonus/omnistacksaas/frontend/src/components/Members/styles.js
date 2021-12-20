import styled from "styled-components";

export const MembersList = styled.ul`
  list-style: none;
  margin: 2rem 0 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0 0;

    &:first-child {
      margin: 0;
    }

    strong {
      font-size: 1.8rem;
    }

    > div {
      width: 32rem;
      color: #666;
    }
  }
`;

export const Invite = styled.form`
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
`;
