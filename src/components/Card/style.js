import styled from "styled-components";

export const Container = styled.div`
  /* Mobile First */
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.COLORS.DARK};
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
  transition: all 300ms ease-in-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:active {
    transform: scale(0.98);
  }

  .image-wrapper {
    width: 100%;
    height: 14rem;
    background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 300ms ease-in-out;
    }
  }

  .plate-info {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex: 1;
  }

  .plate-name {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
    text-transform: capitalize;
    transition: color 200ms ease-in-out;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:active {
      color: ${({ theme }) => theme.COLORS.TOMATO};
    }
  }

  .plate-description {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 3.6rem;
  }

  .plate-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 0.8rem;
  }

  .plate-actions {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .add-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    background: ${({ theme }) => theme.COLORS.TOMATO};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    span {
      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      line-height: 1;
    }

    &:active {
      background: ${({ theme }) => theme.COLORS.TOMATO};
      transform: scale(0.95);
    }
  }

  .add-to-cart-button {
    display: none;
  }

  .value {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.6rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }

  .favorite-icon,
  .edit-icon {
    position: absolute;
    right: 0.8rem;
    top: 0.8rem;
    font-size: 2rem;
    background: rgba(0, 0, 0, 0.6);
    padding: 0.6rem;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
    transition: all 200ms ease-in-out;
    backdrop-filter: blur(4px);

    &:active {
      background: rgba(0, 0, 0, 0.8);
      transform: scale(0.9);
    }
  }

  .favorite-icon {
    &:active {
      path {
        color: ${({ theme }) => theme.COLORS.TOMATO};
      }
    }
  }

  .edit-icon {
    &:active {
      path {
        color: ${({ theme }) => theme.COLORS.CARROT_100};
      }
    }
  }

  /* Tablet */
  @media (min-width: 768px) {
    border-radius: 1rem;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }

    .image-wrapper {
      height: 18rem;

      &:hover img {
        transform: scale(1.1);
      }
    }

    .plate-info {
      padding: 1.4rem;
      gap: 0.8rem;
    }

    .plate-name {
      font-size: 1.6rem;

      &:hover {
        color: ${({ theme }) => theme.COLORS.TOMATO};
      }
    }

    .plate-description {
      font-size: 1.3rem;
      min-height: 4rem;
    }

    .value {
      font-size: 2rem;
    }

    .add-button {
      width: 3.6rem;
      height: 3.6rem;

      span {
        font-size: 2.2rem;
      }

      &:hover {
        background: ${({ theme }) => theme.COLORS.TOMATO};
        transform: scale(1.1);
      }
    }

    .favorite-icon,
    .edit-icon {
      right: 1rem;
      top: 1rem;
      font-size: 2.2rem;
      padding: 0.7rem;

      &:hover {
        background: rgba(0, 0, 0, 0.8);
        transform: scale(1.1);
      }
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    border-radius: 1.2rem;

    .image-wrapper {
      height: 22rem;
    }

    .plate-info {
      padding: 1.6rem;
    }

    .plate-name {
      font-size: 1.8rem;
    }

    .plate-description {
      font-size: 1.4rem;
      min-height: 4.2rem;
    }

    .value {
      font-size: 2.4rem;
    }

    .add-button {
      width: 4rem;
      height: 4rem;

      span {
        font-size: 2.4rem;
      }
    }

    .favorite-icon,
    .edit-icon {
      right: 1.2rem;
      top: 1.2rem;
      font-size: 2.4rem;
      padding: 0.8rem;
    }
  }
`;
