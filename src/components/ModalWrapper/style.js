import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.Z_INDEX.MODAL};

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);

  padding: ${({ theme }) => theme.SPACING.LG};
  overflow-y: auto;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 60rem;
  max-height: 90vh;
  overflow-y: auto;

  background: ${({ theme }) => theme.COLORS.DARK_BORDER};
  border-radius: ${({ theme }) => theme.RADIUS.SM};

  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Scrollbar customizado */
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.SPACING.XS};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
    border-radius: ${({ theme }) => theme.RADIUS.XS};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO};
  }
`;
