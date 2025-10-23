import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 3rem 2rem;
  }
`;

export const AddressesContent = styled.div`
  width: 100%;
  max-width: 120rem;

  .header-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;

    h1 {
      font-family: "Poppins";
      font-size: 2.8rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    button {
      width: 100%;
      height: 4.8rem;
    }
  }

  .loading {
    text-align: center;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    padding: 4rem 0;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 4rem 2rem;
    text-align: center;

    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    button {
      max-width: 30rem;
      height: 4.8rem;
    }
  }

  .addresses-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .back-button {
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    button {
      width: 100%;
      max-width: 40rem;
      height: 4.8rem;
      background: ${({ theme }) => theme.COLORS.DARK_SURFACE};

      &:hover {
        background: ${({ theme }) => theme.COLORS.DARK_BORDER};
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    .addresses-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    .header-section {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 3.6rem;
      }

      button {
        width: auto;
        min-width: 20rem;
      }
    }

    .addresses-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
