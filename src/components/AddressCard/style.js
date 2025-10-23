import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2rem;

  background: ${({ theme, isDefault }) =>
    isDefault ? theme.COLORS.DARK_SURFACE : theme.COLORS.DARK_ELEVATED};
  border: 2px solid ${({ theme, isDefault }) =>
    isDefault ? theme.COLORS.TOMATO : theme.COLORS.DARK_SURFACE};
  border-radius: 8px;

  transition: all 200ms ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.COLORS.TOMATO};
  }

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
      border-radius: 4px;

      font-size: 1.2rem;
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
        transition: all 200ms ease-in-out;
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
