import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > main {
    flex: 1;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.SPACING.LG};

    .text-content {
      margin-bottom: ${({ theme }) => theme.SPACING.XL};

      .back-button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: ${({ theme }) => theme.FONT_SIZE.MD};
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.SPACING.XS};
        cursor: pointer;
        margin-bottom: ${({ theme }) => theme.SPACING.MD};
        transition: all ${({ theme }) => theme.TRANSITION.NORMAL};

        &:hover {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          transform: translateX(-4px);
        }
      }

      h2 {
        font-size: ${({ theme }) => theme.FONT_SIZE["2XL"]};
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-bottom: ${({ theme }) => theme.SPACING.XS};
      }

      .subtitle {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: ${({ theme }) => theme.FONT_SIZE.SM};
      }
    }

    .payments-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      gap: ${({ theme }) => theme.SPACING.LG};

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .empty-state {
      grid-column: 1 / -1;
      text-align: center;
      padding: ${({ theme }) => theme.SPACING["3XL"]};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    }
  }
`;

export const PaymentCard = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: ${({ theme }) => theme.RADIUS.SM};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_700};
  overflow: hidden;
  transition: all ${({ theme }) => theme.TRANSITION.NORMAL};

  &:hover {
    border-color: ${({ theme }) => theme.COLORS.DARK_600};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .card-header {
    background: ${({ theme }) => theme.COLORS.DARK_800};
    padding: ${({ theme }) => theme.SPACING.MD};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_700};

    h3 {
      font-size: ${({ theme }) => theme.FONT_SIZE.LG};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 500;
    }

    .payment-method {
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      padding: ${({ theme }) => theme.SPACING["2XS"]} ${({ theme }) => theme.SPACING.SM};
      border-radius: ${({ theme }) => theme.RADIUS.XS};
      font-size: ${({ theme }) => theme.FONT_SIZE.XS};
      font-weight: 500;
    }
  }

  .card-body {
    padding: ${({ theme }) => theme.SPACING.MD};

    .info-row {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.SPACING["2XS"]};
      margin-bottom: ${({ theme }) => theme.SPACING.SM};

      &.total {
        margin-top: ${({ theme }) => theme.SPACING.MD};
        padding-top: ${({ theme }) => theme.SPACING.MD};
        border-top: 1px solid ${({ theme }) => theme.COLORS.DARK_700};

        .label,
        .value {
          font-size: ${({ theme }) => theme.FONT_SIZE.LG};
          font-weight: 500;
        }

        .value {
          color: ${({ theme }) => theme.COLORS.MINT_100};
        }
      }

      .label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: ${({ theme }) => theme.FONT_SIZE.XS};
        font-weight: 500;
        text-transform: uppercase;
      }

      .value {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: ${({ theme }) => theme.FONT_SIZE.SM};
        line-height: 1.5;
      }

      .items-list {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.SPACING["2XS"]};

        .item {
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          font-size: ${({ theme }) => theme.FONT_SIZE.SM};
          padding: ${({ theme }) => theme.SPACING["2XS"]} 0;
        }
      }
    }
  }

  .card-actions {
    padding: ${({ theme }) => theme.SPACING.MD};
    display: flex;
    gap: ${({ theme }) => theme.SPACING.SM};
    border-top: 1px solid ${({ theme }) => theme.COLORS.DARK_700};

    button {
      flex: 1;
      padding: ${({ theme }) => theme.SPACING.SM} ${({ theme }) => theme.SPACING.MD};
      border: none;
      border-radius: ${({ theme }) => theme.RADIUS.XS};
      font-size: ${({ theme }) => theme.FONT_SIZE.SM};
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${({ theme }) => theme.SPACING.XS};
      transition: all ${({ theme }) => theme.TRANSITION.NORMAL};

      svg {
        font-size: ${({ theme }) => theme.FONT_SIZE.MD};
      }
    }

    .btn-confirm {
      background: ${({ theme }) => theme.COLORS.MINT_100};
      color: ${({ theme }) => theme.COLORS.DARK_900};

      &:hover {
        background: ${({ theme }) => theme.COLORS.MINT_200};
        transform: translateY(-1px);
      }
    }

    .btn-reject {
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
      color: ${({ theme }) => theme.COLORS.TOMATO_300};

      &:hover {
        background: ${({ theme }) => theme.COLORS.TOMATO_300};
        transform: translateY(-1px);
      }
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.SPACING.MD};
  min-width: 400px;

  @media (max-width: 768px) {
    min-width: auto;
  }

  h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 500;
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    line-height: 1.6;

    &.modal-info {
      background: ${({ theme }) => theme.COLORS.DARK_800};
      padding: ${({ theme }) => theme.SPACING.SM};
      border-radius: ${({ theme }) => theme.RADIUS.XS};
      margin: ${({ theme }) => theme.SPACING.SM} 0;

      strong {
        color: ${({ theme }) => theme.COLORS.MINT_100};
      }
    }

    strong {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 500;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.SPACING.XS};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    font-weight: 500;

    textarea {
      background: ${({ theme }) => theme.COLORS.DARK_800};
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_700};
      border-radius: ${({ theme }) => theme.RADIUS.XS};
      padding: ${({ theme }) => theme.SPACING.SM};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: ${({ theme }) => theme.FONT_SIZE.SM};
      font-family: "Poppins", sans-serif;
      resize: vertical;
      transition: all ${({ theme }) => theme.TRANSITION.NORMAL};

      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.COLORS.TOMATO_400};
      }

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }

  .modal-actions {
    display: flex;
    gap: ${({ theme }) => theme.SPACING.SM};
    margin-top: ${({ theme }) => theme.SPACING.MD};

    button {
      flex: 1;
      padding: ${({ theme }) => theme.SPACING.SM} ${({ theme }) => theme.SPACING.MD};
      border: none;
      border-radius: ${({ theme }) => theme.RADIUS.XS};
      font-size: ${({ theme }) => theme.FONT_SIZE.SM};
      font-weight: 500;
      cursor: pointer;
      transition: all ${({ theme }) => theme.TRANSITION.NORMAL};

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .btn-cancel {
      background: ${({ theme }) => theme.COLORS.DARK_700};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      &:hover:not(:disabled) {
        background: ${({ theme }) => theme.COLORS.DARK_600};
      }
    }

    .btn-confirm {
      background: ${({ theme }) => theme.COLORS.MINT_100};
      color: ${({ theme }) => theme.COLORS.DARK_900};

      &:hover:not(:disabled) {
        background: ${({ theme }) => theme.COLORS.MINT_200};
      }
    }

    .btn-reject {
      background: ${({ theme }) => theme.COLORS.TOMATO};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      &:hover:not(:disabled) {
        background: ${({ theme }) => theme.COLORS.TOMATO};
      }
    }
  }
`;
