import styled from "styled-components";

export const Container = styled.button`
  /* Mobile First */
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;
  left: 1.6rem;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 1.4rem 2rem;

  background: ${({ theme }) => theme.COLORS.TOMATO};
  border: none;
  border-radius: 0.8rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);

  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  .cart-info {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    position: relative;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2rem;
    }

    .item-count {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 1.8rem;
      height: 1.8rem;
      padding: 0 0.5rem;
      background: ${({ theme }) => theme.COLORS.LIGHT_100};
      color: ${({ theme }) => theme.COLORS.TOMATO};
      font-size: 1.1rem;
      font-weight: 700;
      border-radius: 10rem;
    }
  }

  .total-value {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
  }

  /* Tablet */
  @media (min-width: 768px) {
    left: auto;
    right: 2rem;
    padding: 1.6rem 2.4rem;
    border-radius: 10rem;

    .cart-info svg {
      font-size: 2.4rem;
    }

    .total-value {
      font-size: 1.8rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    right: 3rem;
    padding: 1.8rem 3rem;
    gap: 1.6rem;

    .cart-info svg {
      font-size: 2.6rem;
    }

    .cart-info .item-count {
      min-width: 2rem;
      height: 2rem;
      font-size: 1.2rem;
    }

    .total-value {
      font-size: 2rem;
    }
  }

  /* Animation on mount */
  animation: slideInUp 400ms ease-out;

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
