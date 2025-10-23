import styled from "styled-components";

export const Container = styled.div`
  /* Mobile First - Sticky Tabs */
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 98;
  background: ${({ theme }) => theme.COLORS.DARK};
  padding: 1.2rem 1.6rem;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  /* Tablet */
  @media (min-width: 768px) {
    padding: 1.4rem 3rem;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 1.6rem 5rem;
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
    $isActive ? theme.COLORS.TOMATO : theme.COLORS.DARK_BORDER};
  border: none;
  border-radius: 2rem;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_400};
  font-size: 1.3rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  white-space: nowrap;
  flex-shrink: 0;

  svg {
    color: ${({ theme, $isActive }) =>
      $isActive ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_100};
    font-size: 1.6rem;
  }

  &:active {
    transform: scale(0.96);
    background-color: ${({ theme, $isActive }) =>
      $isActive ? theme.COLORS.TOMATO : theme.COLORS.DARK_BORDER};
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
        $isActive ? theme.COLORS.TOMATO : theme.COLORS.DARK_BORDER};
      transform: translateY(-1px);
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
