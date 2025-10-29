import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  z-index: ${({ theme }) => theme.Z_INDEX?.MODAL_BACKDROP || 9999};
  inset: 0;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_BORDER || "#1A2329"};
  position: relative;
  width: 90%;
  max-width: 480px;
  border-radius: ${({ theme }) => theme.RADIUS?.XS || "8px"};
  padding: ${({ theme }) => theme.SPACING?.XL || "3rem"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.SPACING?.LG || "2rem"};
  text-align: center;
  animation: ${fadeIn} 0.3s ease-out;

  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100 || "#FFFFFF"};
    margin: 0;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.COLORS.LIGHT_300 || "#C4C4CC"};
    margin: 0;
  }

  .icon-spin {
    color: ${({ theme }) => theme.COLORS.LIGHT_100 || "#FFFFFF"};
    animation: ${spin} 2s linear infinite;
  }

  .icon-success {
    color: ${({ theme }) => theme.COLORS.MINT_100 || "#04D361"};
  }

  .icon-error {
    color: ${({ theme }) => theme.COLORS.TOMATO || "#E74C3C"};
  }

  .icon-warning {
    color: ${({ theme }) => theme.COLORS.CAKE_200 || "#F59E0B"};
  }

  .button-container {
    display: flex;
    gap: ${({ theme }) => theme.SPACING?.MD || "1.6rem"};
    margin-top: ${({ theme }) => theme.SPACING?.MD || "1.6rem"};
    width: 100%;

    button {
      flex: 1;
      padding: 1.4rem;
      font-size: 1.6rem;
      font-weight: 500;
      border-radius: 8px;
      transition: all 0.3s ease;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY?.MEDIUM || "768px"}) {
    width: 480px;
    padding: 4rem;

    h3 {
      font-size: 2.8rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;
