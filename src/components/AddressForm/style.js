import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;

  h2 {
    font-family: "Poppins";
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-bottom: 2.4rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    flex: 1;

    label {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    &.small {
      flex: 0.3;
      min-width: 10rem;
    }
  }

  .form-row {
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;
  }

  .form-actions {
    display: flex;
    gap: 1.6rem;
    margin-top: 2rem;

    button {
      flex: 1;
      height: 4.8rem;
    }

    .btn-cancel {
      background: ${({ theme }) => theme.COLORS.DARK_SURFACE};

      &:hover {
        background: ${({ theme }) => theme.COLORS.DARK_BORDER};
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    h2 {
      font-size: 3.2rem;
    }

    .form-group {
      label {
        font-size: 1.6rem;
      }
    }
  }
`;
