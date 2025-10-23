import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main {
    min-height: calc(100dvh - 20rem);
    max-width: 120rem;
    padding: 4rem 2rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .support-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    padding: 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
    border-radius: 1.2rem;
    border: 1px dashed ${({ theme }) => theme.COLORS.DARK_BORDER};

    p {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    button {
      max-width: 20rem;
    }

    @media (max-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL}) {
      flex-direction: column;
      text-align: center;

      button {
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;

export const ProfileHeader = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.COLORS.DARK_ELEVATED} 0%,
    ${({ theme }) => theme.COLORS.DARK_ELEVATED} 100%
  );
  border-radius: 2rem;
  padding: 3.2rem 2.4rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};

  .user-info {
    display: flex;
    align-items: center;
    gap: 2rem;

    .user-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 8rem;
      height: 8rem;
      background: ${({ theme }) => theme.COLORS.TOMATO};
      border-radius: 50%;
      flex-shrink: 0;

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    .user-details {
      flex: 1;

      h2 {
        font-family: "Poppins", sans-serif;
        font-size: 2.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-bottom: 0.8rem;
      }

      p {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL}) {
    padding: 2.4rem 1.6rem;

    .user-info {
      .user-icon {
        width: 6rem;
        height: 6rem;

        svg {
          font-size: 2.4rem;
        }
      }

      .user-details {
        h2 {
          font-size: 2.2rem;
        }

        p {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export const TabSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .section-description {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-top: -1.2rem;
  }

  .section-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;

    button {
      max-width: 22rem;
    }
  }

  .quick-actions {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
    border-radius: 1.6rem;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};

    h4 {
      font-family: "Poppins", sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

    .actions-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.2rem;

      @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .action-card {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      padding: 1.8rem;
      background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
      border-radius: 1.2rem;
      cursor: pointer;
      transition: all 250ms ease-in-out;

      &:hover {
        background: ${({ theme }) => theme.COLORS.DARK_BORDER};
        border-color: ${({ theme }) => theme.COLORS.TOMATO};
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      }

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        flex-shrink: 0;
      }

      .action-content {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        text-align: left;

        strong {
          font-size: 1.6rem;
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        p {
          font-size: 1.3rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL}) {
    h3 {
      font-size: 2rem;
    }
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.4rem;
  background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
  border-radius: 1.6rem;
  transition: all 250ms ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.COLORS.DARK_BORDER};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2rem;
    }

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }

  .card-value {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-left: 3.2rem;
    word-break: break-word;
  }

  .edit-btn {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    align-self: flex-start;
    margin-left: 3.2rem;
    margin-top: 0.8rem;
    padding: 0.8rem 1.6rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.TOMATO};
    border-radius: 0.6rem;
    color: ${({ theme }) => theme.COLORS.TOMATO};
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    svg {
      font-size: 1.4rem;
    }

    &:hover {
      background: ${({ theme }) => theme.COLORS.TOMATO};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
  border-radius: 1.6rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
  padding: 2.4rem;

  .form-group {
    width: 100%;

    div input {
      background-color: ${({ theme }) => theme.COLORS.DARK_SURFACE};
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
      border-radius: 0.8rem;
      transition: all 200ms ease-in-out;

      &:focus {
        border-color: ${({ theme }) => theme.COLORS.TOMATO};
      }
    }
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin: 1.6rem 0;

    &::before,
    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: ${({ theme }) => theme.COLORS.DARK_BORDER};
    }

    span {
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      white-space: nowrap;
    }
  }

  .button-group {
    display: flex;
    gap: 1.6rem;
    margin-top: 1.6rem;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
      flex-direction: row;
    }

    button {
      flex: 1;
    }

    .secondary-button {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      &:hover {
        background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
        border-color: ${({ theme }) => theme.COLORS.DARK_BORDER};
      }
    }

    .primary-button {
      opacity: ${({ $isEnable }) => ($isEnable ? "1" : "0.5")};
      cursor: ${({ $isEnable }) => ($isEnable ? "pointer" : "not-allowed")};
      pointer-events: ${({ $isEnable }) => ($isEnable ? "auto" : "none")};

      &:hover {
        filter: ${({ $isEnable }) =>
          $isEnable ? "brightness(1.2)" : "brightness(1)"};
      }
    }
  }
`;

export const AddressSection = styled.div`
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    padding: 6rem 2rem;
    background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
    border: 2px dashed ${({ theme }) => theme.COLORS.DARK_BORDER};
    border-radius: 1.6rem;
    text-align: center;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_600};
    }

    h4 {
      font-size: 2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    button {
      margin-top: 0.8rem;
      max-width: 24rem;
    }
  }

  .addresses-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .address-card {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 2rem;
    background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
    border-radius: 1.6rem;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      border-color: ${({ theme }) => theme.COLORS.TOMATO};
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }

    .address-header {
      display: flex;
      gap: 1.2rem;

      .address-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.8rem;
        height: 4.8rem;
        background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
        border-radius: 1rem;
        flex-shrink: 0;

        svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }

      .address-title {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        flex: 1;

        strong {
          font-size: 1.6rem;
          font-weight: 600;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        .default-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.8rem;
          background: ${({ theme }) => theme.COLORS.LIGHT_100}20;
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
          border-radius: 0.4rem;
          font-size: 1.1rem;
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          width: fit-content;

          svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
          }
        }
      }
    }

    .address-body {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;

      .address-street {
        font-size: 1.5rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
      }

      .address-city,
      .address-zip {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }

  .see-more-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    padding: 2rem;
    background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
    border: 2px dashed ${({ theme }) => theme.COLORS.DARK_BORDER};
    border-radius: 1.6rem;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      span {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_600};
      transition: color 200ms ease-in-out;
    }

    p {
      font-size: 1.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      transition: color 200ms ease-in-out;
    }
  }
`;

export const LoyaltySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .loyalty-card {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 3.2rem;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.COLORS.DARK_ELEVATED} 0%,
      ${({ theme }) => theme.COLORS.DARK_ELEVATED} 100%
    );
    border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 2rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

    .loyalty-header {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      h4 {
        font-family: "Poppins", sans-serif;
        font-size: 1.8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      .points-value {
        font-size: 3.2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-top: 0.4rem;
      }
    }

    .loyalty-value {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      .discount-available {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        padding: 1.6rem;
        background: ${({ theme }) => theme.COLORS.LIGHT_100}15;
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
        border-radius: 1.2rem;

        svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        span {
          font-size: 1.6rem;
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }

      .discount-value {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        text-align: center;

        strong {
          font-size: 2.4rem;
          font-weight: 700;
          color: ${({ theme }) => theme.COLORS.TOMATO};
        }
      }

      .progress-bar {
        width: 100%;
        height: 1.2rem;
        background: ${({ theme }) => theme.COLORS.DARK_BORDER};
        border-radius: 0.6rem;
        overflow: hidden;

        .progress-fill {
          height: 100%;
          background: linear-gradient(
            90deg,
            ${({ theme }) => theme.COLORS.LIGHT_100} 0%,
            ${({ theme }) => theme.COLORS.TOMATO} 100%
          );
          transition: width 500ms ease-in-out;
        }
      }

      .progress-text {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        text-align: center;

        strong {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }
    }
  }

  .loyalty-info-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;

    @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
      grid-template-columns: repeat(2, 1fr);
    }

    .info-card {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      padding: 2.4rem;
      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
      border-radius: 1.6rem;

      h5 {
        font-family: "Poppins", sans-serif;
        font-size: 1.8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        list-style: none;
        padding: 0;

        li {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          font-size: 1.4rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_400};

          &::before {
            content: "•";
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 2rem;
            line-height: 1.4rem;
          }
        }
      }

      .link-button {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        padding: 1.2rem 1.6rem;
        background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
        border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
        border-radius: 0.8rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 1.4rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 200ms ease-in-out;

        svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        &:hover {
          background: ${({ theme }) => theme.COLORS.DARK_BORDER};
          border-color: ${({ theme }) => theme.COLORS.TOMATO};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }
    }
  }
`;
