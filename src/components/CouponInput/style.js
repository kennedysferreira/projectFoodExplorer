import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .coupon-input-group {
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;

    > div {
      flex: 1;
      min-width: 20rem;
    }

    button {
      width: auto;
      min-width: 12rem;
      height: auto;
      padding: 1.2rem 2.4rem;
    }
  }

  .coupon-applied {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
    padding: 1.6rem;

    background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
    border: 2px solid ${({ theme }) => theme.COLORS.TOMATO};
    border-radius: ${({ theme }) => theme.RADIUS.SM};

    .coupon-info {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      flex: 1;

      svg {
        color: ${({ theme }) => theme.COLORS.TOMATO};
        min-width: 2.4rem;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        strong {
          font-size: 1.6rem;
          font-weight: 700;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          text-transform: uppercase;
        }

        p {
          font-size: 1.4rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        .discount {
          font-size: 1.5rem;
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.TOMATO};
          margin-top: 0.4rem;
        }
      }
    }

    .remove-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem;

      background: transparent;
      border: none;
      cursor: pointer;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      transition: all 200ms ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.COLORS.TOMATO};
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    .coupon-input-group {
      flex-wrap: nowrap;
    }
  }
`;
