import styled from "styled-components";

export const Container = styled.section`
  margin: 2rem 0;
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    margin: 3rem 0;

    &::before {
      left: -3px;
      top: 0;
      z-index: 1;
      background: rgb(0, 10, 15);
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 1) 30%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &::after {
      right: -3px;
      top: 0;
      z-index: 0;
      background: rgb(0, 10, 15);
      background: linear-gradient(
        270deg,
        rgba(0, 10, 15, 1) 30%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &::before,
    &::after {
      content: "";
      width: 20rem;
      height: 100%;
      position: absolute;
      display: block;
    }
  }

  @media (min-width: 1250px) {
    margin: 4rem 0;
  }

  > p:first-child {
    display: none;
  }

  #children {
    padding: 0;

    > ul {
      bottom: -3rem;
    }
  }
`;
