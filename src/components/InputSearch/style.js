import styled from "styled-components";

export const Container = styled.div`
  /* Mobile First - Mostrar ícone */
  display: flex;
  position: relative;
  flex: 1;
  max-width: 4rem;

  /* Esconder o input, mostrar só o ícone */
  div {
    width: 4rem;
    background: none;
    border: none;
    padding: 0;
  }

  div input {
    display: none;
  }

  div svg {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    transition: ${({ theme }) => theme.TRANSITION.FAST};
    font-size: 2rem;

    &:hover {
      color: ${({ theme }) => theme.COLORS.TOMATO};
    }
  }

  /* Tablet - Mostrar input compacto */
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    max-width: 28rem;

    div {
      width: 100%;
      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
      border-radius: ${({ theme }) => theme.RADIUS.MD};
      padding: 0 ${({ theme }) => theme.SPACING.SM};
    }

    div input {
      display: block;
    }

    div input::placeholder {
      text-align: left;
      font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    }

    div svg {
      font-size: 1.8rem;
    }
  }

  /* Desktop - Input completo */
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    flex: 1;
    max-width: 58rem;

    div input::placeholder {
      text-align: center;
      font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    }

    div svg {
      font-size: 2rem;
    }
  }
`;

export const SearchResult = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX.DROPDOWN};
  width: 100%;
  padding: ${({ theme }) => theme.SPACING.LG};
  border-radius: ${({ theme }) => theme.RADIUS.MD};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
  position: absolute;
  top: calc(100% + ${({ theme }) => theme.SPACING.XS});
  max-height: 30rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
  box-shadow: ${({ theme }) => theme.SHADOW.LG};
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: ${({ theme }) => theme.SPACING.MD};
  animation: slideDown 200ms ease-out;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.DARK_BORDER};
    border-radius: ${({ theme }) => theme.RADIUS.SM};
  }

  p {
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
    text-transform: capitalize;
    padding: ${({ theme }) => theme.SPACING.SM};
    border-radius: ${({ theme }) => theme.RADIUS.SM};
    transition: ${({ theme }) => theme.TRANSITION.FAST};

    &:hover {
      color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
      background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
    }

    &:not(:last-child)::after {
      content: "";
      display: block;
      height: 1px;
      margin-top: ${({ theme }) => theme.SPACING.SM};
      background-color: ${({ theme }) => theme.COLORS.DARK_BORDER};
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-${({ theme }) => theme.SPACING.SM});
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const MobileSearchModal = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.COLORS.DARK};
  z-index: ${({ theme }) => theme.Z_INDEX.MODAL};
  animation: fadeIn 200ms ease-out;

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.SPACING.LG} ${({ theme }) => theme.SPACING.MD};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};

    h2 {
      font-size: ${({ theme }) => theme.FONT_SIZE.XL};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
      font-family: "Poppins", sans-serif;
    }

    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
      cursor: pointer;
      padding: ${({ theme }) => theme.SPACING.XS};
      transition: ${({ theme }) => theme.TRANSITION.FAST};

      &:active {
        color: ${({ theme }) => theme.COLORS.TOMATO};
        transform: scale(0.95);
      }
    }
  }

  .search-input {
    padding: ${({ theme }) => theme.SPACING.MD};

    div {
      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
    }
  }

  .search-results {
    flex: 1;
    overflow-y: auto;
    padding: 0 ${({ theme }) => theme.SPACING.MD} ${({ theme }) => theme.SPACING.MD};

    .result-item {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.SPACING.SM};
      width: 100%;
      padding: ${({ theme }) => theme.SPACING.MD};
      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
      border-radius: ${({ theme }) => theme.RADIUS.MD};
      color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
      font-size: ${({ theme }) => theme.FONT_SIZE.MD};
      text-align: left;
      cursor: pointer;
      transition: ${({ theme }) => theme.TRANSITION.FAST};
      margin-bottom: ${({ theme }) => theme.SPACING.SM};
      text-transform: capitalize;

      svg {
        color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
        flex-shrink: 0;
      }

      &:active {
        background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
        border-color: ${({ theme }) => theme.COLORS.TOMATO};
      }
    }

    .no-results,
    .hint {
      text-align: center;
      padding: ${({ theme }) => theme.SPACING.XXL};
      color: ${({ theme }) => theme.COLORS.TEXT_TERTIARY};
      font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Tablet e acima - Esconder modal (usa dropdown normal) */
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    display: none !important;
  }
`;
