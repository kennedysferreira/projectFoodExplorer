import styled from "styled-components";

export const Container = styled.footer`
  /* Mobile First */
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  padding: 2.4rem 1.6rem;
  margin-top: auto;

  > div {
    filter: contrast(0) opacity(0.7);
    transition: all 300ms ease-in-out;

    &:hover {
      filter: contrast(0) opacity(1);
    }

    p {
      font-size: 1.5rem;
      font-weight: 600;
    }

    img {
      width: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    text-align: center;
    line-height: 140%;
  }

  /* Tablet */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2.4rem 3rem;
    gap: 2rem;

    > div {
      p {
        font-size: 1.8rem;
      }

      img {
        width: 2.4rem;
      }
    }

    p {
      font-size: 1.3rem;
      text-align: right;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 2.4rem 5rem;

    > div {
      p {
        font-size: 2rem;
      }

      img {
        width: 2.6rem;
      }
    }

    p {
      font-size: 1.4rem;
    }
  }

  /* Large Desktop */
  @media (min-width: 1440px) {
    padding: 3rem 12rem;
    gap: 3rem;
  }
`;
