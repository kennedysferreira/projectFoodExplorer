import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DARK};
  z-index: ${({ theme }) => theme.Z_INDEX.MODAL};
  display: none;
  flex-direction: column;
  animation: slideInLeft 300ms ease-out;

  &[data-menu-is-open="true"] {
    display: flex;
  }

  &[data-menu-is-closing="true"] {
    animation: slideOutLeft 300ms ease-out;
  }

  footer {
    background-color: ${({ theme }) => theme.COLORS.DARK};
    padding: ${({ theme }) => theme.SPACING.LG};

    > p {
      font-size: ${({ theme }) => theme.FONT_SIZE.XS};
      font-family: "Poppins", sans-serif;
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOutLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: none !important;
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.SPACING.MD};
  background-color: ${({ theme }) => theme.COLORS.DARK};
  padding: ${({ theme }) => theme.SPACING.LG} ${({ theme }) => theme.SPACING.MD};
  cursor: pointer;
  transition: ${({ theme }) => theme.TRANSITION.FAST};

  /* Remove blue tap highlight on mobile/touch devices */
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  outline: none;

  svg {
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    flex-shrink: 0;
  }

  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  }

  &:focus {
    outline: none;
  }

  &:active {
    background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
  }
`;

export const MenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${({ theme }) => theme.SPACING.LG} 0;
  gap: ${({ theme }) => theme.SPACING.XXS};

  .menu-option {
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${({ theme }) => theme.SPACING.MD} ${({ theme }) => theme.SPACING.LG};
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    text-align: left;
    cursor: pointer;
    transition: ${({ theme }) => theme.TRANSITION.FAST};

    &:active {
      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      color: ${({ theme }) => theme.COLORS.TOMATO};
    }
  }
`;

export const MenuFooter = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK};
  padding: ${({ theme }) => theme.SPACING.LG};

  .logout-button {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.SPACING.SM};
    width: 100%;
    padding: ${({ theme }) => theme.SPACING.MD} 0;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.ERROR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    text-align: left;
    cursor: pointer;
    transition: ${({ theme }) => theme.TRANSITION.FAST};

    svg {
      flex-shrink: 0;
    }

    span {
      flex: 1;
      text-align: left;
    }

    &:active {
      opacity: 0.7;
      transform: scale(0.98);
    }
  }
`;
