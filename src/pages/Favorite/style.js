import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main {
    min-height: calc(100dvh - 200px);
    max-width: 120rem;
    margin: 6rem 2rem;

    @media (min-width: 475px) {
      margin: 6rem 4rem;
    }

    @media (min-width: 1260px) {
      margin: 6rem auto;
    }
  }

  h2 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 3.2rem;
  }

  .back-button {
    background: none;
    display: flex;
    gap: 1rem;
    margin: 2rem 0 4rem 0;
  }

  .text-content {
    margin-bottom: 2rem;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
      max-width: 120rem;
      margin: 6rem auto 2rem;
    }
  }

  .favorites-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: 2rem;
    margin: 0 auto;
    max-width: 120rem;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
      gap: 2.4rem;
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    }

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
      gap: 3.2rem;
      grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
    }
  }

  .empty-favorites {
    grid-column: 1 / -1;
    text-align: center;
    padding: 4rem 2rem;

    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: "Poppins", sans-serif;
    }
  }
`;
