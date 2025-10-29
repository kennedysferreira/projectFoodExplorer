import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    max-width: 140rem;
    width: 100%;
    margin: 0 auto;
    padding: 4rem 2rem;

    > h1 {
      font-family: "Poppins";
      font-size: 3.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      margin-bottom: 3.2rem;

      @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
        font-size: 4rem;
      }
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  padding: 8rem 2rem;
  text-align: center;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  h2 {
    font-family: "Poppins";
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  button {
    max-width: 30rem;
  }
`;

export const CheckoutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    grid-template-columns: 1.5fr 1fr;
    align-items: start;
  }
`;

export const CartSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.6rem;

    h2 {
      font-family: "Poppins";
      font-size: 2.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
        font-size: 2.8rem;
      }
    }

    .clear-btn {
      padding: 0.8rem 1.6rem;
      background: transparent;
      border: 1px solid ${({ theme }) => theme.COLORS.TOMATO};
      border-radius: 0.8rem;
      color: ${({ theme }) => theme.COLORS.TOMATO};
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 200ms ease-in-out;

      &:hover {
        background: ${({ theme }) => theme.COLORS.TOMATO};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .cart-item {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 1.4rem 2rem;
    background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
    border-radius: 1.2rem;
    transition: all 200ms ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
    }

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
      gap: 2.4rem;
      padding: 2.4rem;
    }

    img {
      width: 7rem;
      height: 7rem;
      object-fit: cover;
      border-radius: 0.8rem;
      flex-shrink: 0;

      @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
        width: 9rem;
        height: 9rem;
      }
    }

    .item-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      min-width: 0;

      .item-name {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        line-height: 1.4;

        @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
          font-size: 1.8rem;
        }
      }

      .item-description {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
          font-size: 1.4rem;
        }
      }

      .item-price {
        font-size: 1.6rem;
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-top: 0.4rem;

        @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
          font-size: 1.8rem;
        }
      }
    }

    .remove-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      background: transparent;
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
      border-radius: 0.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1.6rem;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 200ms ease-in-out;

      &:hover {
        background: ${({ theme }) => theme.COLORS.DARK_BORDER};
        border-color: ${({ theme }) => theme.COLORS.TOMATO};
        color: ${({ theme }) => theme.COLORS.TOMATO};
      }

      svg {
        pointer-events: none;
      }
    }
  }
`;

export const CheckoutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .checkout-block {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > h3 {
      font-family: "Poppins";
      font-size: 2.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
        font-size: 2.8rem;
      }
    }
  }

  .checkout-step {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 2.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
    border-radius: 1.2rem;

    .empty-addresses {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;
      padding: 3.2rem 2rem;
      text-align: center;

      p {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }

      .help-text {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }

      .address-actions {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        width: 100%;
        max-width: 30rem;

        button {
          width: 100%;
        }

        .link-btn {
          padding: 1.2rem;
          background: transparent;
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
          border-radius: 0.8rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          font-size: 1.6rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 200ms ease-in-out;

          &:hover {
            background: ${({ theme }) => theme.COLORS.LIGHT_100};
            color: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
          }
        }
      }
    }

    .addresses-list {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    .add-address-btn-inline {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      padding: 1.6rem;
      width: 100%;
      margin-top: 1.2rem;

      background: transparent;
      border: 2px dashed ${({ theme }) => theme.COLORS.DARK_BORDER};
      border-radius: 0.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1.5rem;
      font-weight: 500;

      cursor: pointer;
      transition: all 200ms ease-in-out;

      &:hover {
        border-color: ${({ theme }) => theme.COLORS.TOMATO};
        color: ${({ theme }) => theme.COLORS.TOMATO};
        background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
      }

      svg {
        flex-shrink: 0;
      }
    }
  }
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2.4rem;
  background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
  border-radius: 1.2rem;
  position: sticky;
  top: 2rem;

  h3 {
    font-family: "Poppins";
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-bottom: 0.8rem;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
  }

  .summary-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    &.discount {
      color: ${({ theme }) => theme.COLORS.TOMATO};

      span:last-child {
        font-weight: 500;
      }
    }
  }

  .summary-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.6rem;
    margin-top: 0.8rem;
    border-top: 2px solid ${({ theme }) => theme.COLORS.DARK_BORDER};

    strong {
      font-family: "Poppins";
      font-size: 2rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    strong:last-child {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  button:first-of-type {
    margin-top: 1.6rem;
  }

  .back-btn {
    width: 100%;
    padding: 1.2rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
      border-color: ${({ theme }) => theme.COLORS.LIGHT_600};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;
