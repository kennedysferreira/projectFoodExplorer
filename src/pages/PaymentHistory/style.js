import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > main {
    flex: 1;
    width: 100%;
    max-width: 1400px;
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

    .loading-state,
    .empty-state {
      text-align: center;
      padding: ${({ theme }) => theme.SPACING["3XL"]};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    }
  }
`;

export const FiltersBar = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_900};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: ${({ theme }) => theme.RADIUS.SM};
  padding: ${({ theme }) => theme.SPACING.MD};
  margin-bottom: ${({ theme }) => theme.SPACING.LG};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.SPACING.MD};

  .filter-group {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.SPACING.MD};
    flex-wrap: wrap;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    }

    label {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.SPACING.XS};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: ${({ theme }) => theme.FONT_SIZE.SM};
      font-weight: 500;

      select {
        background: ${({ theme }) => theme.COLORS.DARK_800};
        border: 1px solid ${({ theme }) => theme.COLORS.DARK_700};
        border-radius: ${({ theme }) => theme.RADIUS.XS};
        padding: ${({ theme }) => theme.SPACING.XS} ${({ theme }) => theme.SPACING.SM};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: ${({ theme }) => theme.FONT_SIZE.SM};
        cursor: pointer;
        transition: all ${({ theme }) => theme.TRANSITION.NORMAL};

        &:focus {
          outline: none;
          border-color: ${({ theme }) => theme.COLORS.TOMATO_400};
        }

        &:hover {
          border-color: ${({ theme }) => theme.COLORS.DARK_600};
        }
      }
    }
  }

  .results-count {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  }
`;

export const HistoryTable = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_900};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: ${({ theme }) => theme.RADIUS.SM};
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      background: ${({ theme }) => theme.COLORS.DARK_800};

      th {
        padding: ${({ theme }) => theme.SPACING.MD};
        text-align: left;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: ${({ theme }) => theme.FONT_SIZE.XS};
        font-weight: 500;
        text-transform: uppercase;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_700};
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_700};
        transition: all ${({ theme }) => theme.TRANSITION.NORMAL};

        &:hover {
          background: ${({ theme }) => theme.COLORS.DARK_800};
        }

        &:last-child {
          border-bottom: none;
        }
      }

      td {
        padding: ${({ theme }) => theme.SPACING.MD};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: ${({ theme }) => theme.FONT_SIZE.SM};

        &.order-id {
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        &.price {
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.MINT_100};
        }

        &.date {
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          font-size: ${({ theme }) => theme.FONT_SIZE.XS};
        }

        &.notes {
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          font-size: ${({ theme }) => theme.FONT_SIZE.XS};
        }

        .payment-method {
          background: ${({ theme }) => theme.COLORS.DARK_800};
          border: 1px solid ${({ theme }) => theme.COLORS.DARK_700};
          padding: ${({ theme }) => theme.SPACING["2XS"]} ${({ theme }) => theme.SPACING.SM};
          border-radius: ${({ theme }) => theme.RADIUS.XS};
          font-size: ${({ theme }) => theme.FONT_SIZE.XS};
          display: inline-block;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: ${({ theme }) => theme.SPACING["2XS"]};
          padding: ${({ theme }) => theme.SPACING["2XS"]} ${({ theme }) => theme.SPACING.SM};
          border-radius: ${({ theme }) => theme.RADIUS.XS};
          font-size: ${({ theme }) => theme.FONT_SIZE.XS};
          font-weight: 500;

          svg {
            font-size: ${({ theme }) => theme.FONT_SIZE.XS};
          }

          &.badge-confirmed {
            background: rgba(4, 211, 97, 0.1);
            color: ${({ theme }) => theme.COLORS.MINT_100};
            border: 1px solid ${({ theme }) => theme.COLORS.MINT_100};
          }

          &.badge-rejected {
            background: rgba(146, 0, 10, 0.2);
            color: ${({ theme }) => theme.COLORS.TOMATO_300};
            border: 1px solid ${({ theme }) => theme.COLORS.TOMATO_400};
          }

          &.badge-pending {
            background: rgba(255, 165, 0, 0.1);
            color: #ffa500;
            border: 1px solid #ffa500;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    overflow-x: auto;

    table {
      min-width: 1000px;
    }
  }
`;
