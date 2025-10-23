import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2rem;

  background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
  border-radius: 8px;

  .points-header {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    h3 {
      font-family: "Poppins";
      font-size: 1.8rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  .points-balance {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .balance-info {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      strong {
        font-size: 2.4rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }

      .value {
        margin-top: 0.8rem;
        font-size: 1.8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.TOMATO};
      }
    }

    .info-text {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 1.2rem;

      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      border-radius: 4px;

      font-size: 1.3rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        min-width: 1.6rem;
      }
    }
  }

  .use-points-section {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1rem;
    padding-top: 1.6rem;
    border-top: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};

    .input-group {
      display: flex;
      gap: 1.2rem;

      input {
        flex: 1;
        padding: 1.2rem 1.6rem;

        background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
        border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
        border-radius: 8px;

        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        &::placeholder {
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.COLORS.TOMATO};
        }
      }

      .btn-max {
        padding: 1.2rem 2rem;

        background: ${({ theme }) => theme.COLORS.DARK_BORDER};
        border: none;
        border-radius: 8px;

        font-size: 1.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        cursor: pointer;

        transition: all 200ms ease-in-out;

        &:hover {
          background: ${({ theme }) => theme.COLORS.DARK_BORDER};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }
    }

    .discount-preview {
      padding: 1.2rem;
      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      border-radius: 4px;
      text-align: center;

      p {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        strong {
          font-size: 1.8rem;
          color: ${({ theme }) => theme.COLORS.TOMATO};
        }
      }
    }

    button {
      height: 4.8rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    .points-header {
      h3 {
        font-size: 2rem;
      }
    }
  }
`;
