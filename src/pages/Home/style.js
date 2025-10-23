import styled from "styled-components";

export const Container = styled.div`
  /* Mobile First */
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;

  > main {
    flex: 1;
    background: ${({ theme }) => theme.COLORS.DARK};
  }

  .categories-container {
    padding: 0 1.6rem 2rem;
    width: 100%;
  }

  /* Tablet */
  @media (min-width: 768px) {
    .categories-container {
      padding: 0 3rem 4rem;
      max-width: 120rem;
      margin: 0 auto;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    .categories-container {
      padding: 0 5rem 6rem;
      max-width: 140rem;
    }
  }
`;

export const CategorySection = styled.section`
  /* Mobile First */
  margin-bottom: 3.2rem;
  scroll-margin-top: 6rem; /* Altura aproximada das Tabs fixas */

  h2.category-title {
    display: block !important;
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 2rem;
    padding: 0 1.6rem;
    visibility: visible !important;
    opacity: 1 !important;
  }

  /* Tablet */
  @media (min-width: 768px) {
    margin-bottom: 4rem;
    scroll-margin-top: 7rem;

    h2.category-title {
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
      padding: 0 3rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    margin-bottom: 5rem;
    scroll-margin-top: 8rem;

    h2.category-title {
      font-size: 3.2rem;
      margin-bottom: 3.2rem;
      padding: 0 5rem;
    }
  }
`;

export const Banner = styled.div`
  /* Mobile First */
  width: calc(100% - 3.2rem);
  height: auto;
  min-height: 12rem;
  background: linear-gradient(
    180deg,
    rgba(9, 30, 38, 1) 0%,
    rgba(0, 19, 28, 1) 100%
  );
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border-radius: 0.8rem;
  margin: 1.6rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
    left: -2rem;
    bottom: 0;
    width: 15rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
  }

  /* Tablet */
  @media (min-width: 768px) {
    width: 90%;
    height: 16rem;
    border-radius: 1rem;
    margin: 2.4rem auto;

    > img {
      left: -2.4rem;
      width: 22rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    max-width: 110rem;
    height: 22rem;
    border-radius: 1.2rem;
    margin: 3.2rem auto;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);

    > img {
      left: -4rem;
      width: 35rem;
    }
  }

  @media (min-width: 1280px) {
    height: 26rem;
    margin: 4.8rem auto;

    > img {
      left: -6rem;
      width: 45rem;
    }
  }
`;

export const BannerText = styled.div`
  /* Mobile First */
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-left: auto;
  padding: 1.2rem 1.6rem 1.2rem 12rem;

  h3,
  p {
    font-family: "Poppins", sans-serif;
    line-height: 140%;
  }

  > h3 {
    font-size: 1.6rem;
    font-weight: 600;
  }

  > p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  /* Tablet */
  @media (min-width: 768px) {
    padding: 1.6rem 2rem 1.6rem 20rem;

    > h3 {
      font-size: 2rem;
    }

    > p {
      font-size: 1.3rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 2rem 3rem 2rem 30rem;

    > h3 {
      font-size: 3rem;
    }

    > p {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1280px) {
    padding: 3rem 6rem 3rem 40rem;

    > h3 {
      font-size: 3.6rem;
    }

    > p {
      font-size: 1.6rem;
    }
  }
`;
