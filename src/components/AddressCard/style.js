import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ $variant }) => $variant === "checkout" ? "row" : "column"};
  align-items: ${({ $variant }) => $variant === "checkout" ? "center" : "stretch"};
  gap: ${({ $variant }) => $variant === "checkout" ? "1.6rem" : "1.6rem"};
  padding: ${({ $variant }) => $variant === "checkout" ? "1.6rem" : "2rem"};

  background: ${({ theme, $isDefault, $variant, $isSelected }) =>
    $variant === "checkout"
      ? $isSelected
        ? theme.COLORS.DARK_SURFACE
        : "transparent"
      : $isDefault
      ? theme.COLORS.DARK_SURFACE
      : theme.COLORS.DARK_ELEVATED};
  border: ${({ theme, $isDefault, $variant, $isSelected }) =>
    $variant === "checkout"
      ? $isSelected
        ? `2px solid ${theme.COLORS.TOMATO}`
        : `1px solid ${theme.COLORS.DARK_BORDER}`
      : $isDefault
      ? `2px solid ${theme.COLORS.TOMATO}`
      : `2px solid ${theme.COLORS.DARK_SURFACE}`};
  border-radius: ${({ theme }) => theme.RADIUS.SM};

  cursor: ${({ $variant }) => $variant === "checkout" ? "pointer" : "default"};
  transition: all ${({ theme }) => theme.TRANSITION.NORMAL};

  &:hover {
    border-color: ${({ theme, $variant }) =>
      $variant === "checkout" ? theme.COLORS.TOMATO : theme.COLORS.TOMATO};
    background: ${({ theme, $variant }) =>
      $variant === "checkout" ? theme.COLORS.DARK_SURFACE : "initial"};
  }

  /* Estilos variant checkout */
  ${({ $variant }) => $variant === "checkout" && `
    .checkout-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      svg {
        color: ${props => props.theme.COLORS.LIGHT_400};
      }
    }

    .checkout-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      min-width: 0;

      .checkout-label {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${props => props.theme.COLORS.LIGHT_100};
        line-height: 1.4;
      }

      .checkout-street {
        font-size: 1.4rem;
        color: ${props => props.theme.COLORS.LIGHT_400};
        line-height: 1.4;
      }
    }
  `}

  .address-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .location-icon {
      color: ${({ theme }) => theme.COLORS.TOMATO};
    }

    .default-badge {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.4rem 1rem;

      background: ${({ theme }) => theme.COLORS.TOMATO};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border-radius: ${({ theme }) => theme.RADIUS.XS};

      font-size: ${({ theme }) => theme.FONT_SIZE.XS};
      font-weight: 500;
    }
  }

  .address-content {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    h3 {
      font-family: "Poppins";
      font-size: 1.8rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      line-height: 140%;
    }

    .street {
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .complement {
      font-style: italic;
    }
  }

  .address-actions {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1rem;

    .btn-default {
      width: 100%;
      height: 4rem;
      font-size: 1.4rem;
    }

    .action-icons {
      display: flex;
      gap: 1.6rem;
      justify-content: flex-end;

      svg {
        cursor: pointer;
        transition: all ${({ theme }) => theme.TRANSITION.NORMAL};
      }

      .edit-icon {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        &:hover {
          color: ${({ theme }) => theme.COLORS.CARROT_100};
        }
      }

      .delete-icon {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        &:hover {
          color: ${({ theme }) => theme.COLORS.TOMATO};
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    .address-content {
      h3 {
        font-size: 2rem;
      }

      p {
        font-size: 1.6rem;
      }
    }

    .address-actions {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .btn-default {
        width: auto;
        padding: 0 2rem;
      }
    }
  }
`;
