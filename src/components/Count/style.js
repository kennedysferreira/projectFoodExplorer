import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
  border-radius: 10rem;
  padding: 0.6rem 1.2rem;

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 2.2rem;
    transition: all 200ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.COLORS.TOMATO};
      transform: scale(1.15);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  span {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    min-width: 3rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
  }
`;
