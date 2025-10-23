import styled from "styled-components";

export const Container = styled.div`
  /* Mobile First - Sticky Tabs */
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 7rem; /* Abaixo do Header*/
  z-index: ${({ theme }) => theme.Z_INDEX.STICKY - 1}; /* Abaixo do Header mas acima do conteúdo */
  background: ${({ theme }) => theme.COLORS.DARK};
  padding: ${({ theme }) => theme.SPACING.SM} ${({ theme }) => theme.SPACING.MD};
  margin: 0;
  box-shadow: ${({ theme }) => theme.SHADOW.MD};

  /* Tablet */
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    top: 8rem; /* Abaixo do Header (altura do Header tablet) */
    padding: ${({ theme }) => theme.SPACING.SM} ${({ theme }) => theme.SPACING.XL};
  }

  /* Desktop */
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    top: 9rem; /* Abaixo do Header (altura do Header desktop) */
    padding: ${({ theme }) => theme.SPACING.MD} ${({ theme }) => theme.SPACING.XXL};
  }
`;

export const TabList = styled.div`
  /* Mobile First */
  display: flex;
  gap: 0.6rem;
  background-color: transparent;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Tablet */
  @media (min-width: 768px) {
    gap: 0.8rem;
    justify-content: center;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    gap: 1rem;
  }
`;

export const TabButton = styled.button`
  /* Mobile First */
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.COLORS.TOMATO : "transparent"};
  border: 1px solid ${({ theme, $isActive }) =>
    $isActive ? theme.COLORS.TOMATO : theme.COLORS.DARK_BORDER};
  border-radius: 0.8rem;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_400};
  font-size: 1.3rem;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "500")};
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  flex-shrink: 0;
  box-shadow: ${({ $isActive }) =>
    $isActive ? "0 2px 8px rgba(224, 30, 90, 0.3)" : "none"};

  /* Remove blue tap highlight on mobile */
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;

  svg {
    color: ${({ theme, $isActive }) =>
      $isActive ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
    transition: transform 200ms ease;
  }

  &:active {
    transform: scale(0.96);
  }

  /* Tablet */
  @media (min-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.4rem;
    gap: 0.8rem;

    svg {
      font-size: 1.7rem;
    }

    &:hover {
      background-color: ${({ theme, $isActive }) =>
        $isActive ? theme.COLORS.TOMATO : "rgba(255, 255, 255, 0.05)"};
      border-color: ${({ theme, $isActive }) =>
        $isActive ? theme.COLORS.TOMATO : theme.COLORS.LIGHT_400};
      transform: translateY(-2px);
      box-shadow: ${({ $isActive }) =>
        $isActive
          ? "0 4px 12px rgba(224, 30, 90, 0.4)"
          : "0 2px 8px rgba(0, 0, 0, 0.2)"};

      svg {
        transform: scale(1.1);
      }
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 1.2rem 2.4rem;
    font-size: 1.5rem;

    svg {
      font-size: 1.8rem;
    }
  }
`;

export const TabContent = styled.div`
  width: 100%;
  animation: fadeIn 300ms ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
