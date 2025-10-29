import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    max-width: 120rem;
    padding: 1.6rem;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    @media (min-width: 768px) {
      padding: 3rem;
      gap: 2.8rem;
    }

    @media (min-width: 1024px) {
      padding: 5rem;
      gap: 3.2rem;
      max-width: 140rem;
    }
  }

  .support-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    padding: 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
    border-radius: 0.8rem;
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

    @media (min-width: 768px) {
      border-radius: 1rem;
    }

    @media (min-width: 1024px) {
      border-radius: 1.2rem;
    }
  }
`;

export const ProfileHeader = styled.div`
  /* Mobile First */
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.COLORS.DARK_ELEVATED} 0%,
    ${({ theme }) => theme.COLORS.DARK_ELEVATED} 100%
  );
  border-radius: 0.8rem;
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

  /* Tablet */
  @media (min-width: 768px) {
    border-radius: 1rem;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    border-radius: 1.2rem;
  }
`;

export const ProfileSection = styled.section`
  /* Mobile First */
  scroll-margin-top: 13rem;
  margin-bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .section-description {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-top: -1.2rem;
  }

  /* Tablet */
  @media (min-width: 768px) {
    scroll-margin-top: 14rem;
    margin-bottom: 4rem;
    gap: 2.4rem;

    h3 {
      font-size: 2.4rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    scroll-margin-top: 16rem;
    margin-bottom: 5rem;

    h3 {
      font-size: 3.2rem;
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
  /* Mobile First */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;
  padding: 2.4rem;
  background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
  border-radius: 0.8rem;
  transition: all 250ms ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.COLORS.DARK_BORDER};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    min-width: fit-content;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2rem;
      flex-shrink: 0;
    }

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      white-space: nowrap;
    }
  }

  .card-value {
    flex: 1;
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    word-break: break-word;
  }

  .edit-btn {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.6rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.TOMATO};
    border-radius: 0.6rem;
    color: ${({ theme }) => theme.COLORS.TOMATO};
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    white-space: nowrap;
    flex-shrink: 0;

    svg {
      font-size: 1.4rem;
    }

    &:hover {
      background: ${({ theme }) => theme.COLORS.TOMATO};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  /* Tablet */
  @media (min-width: 768px) {
    border-radius: 1rem;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    border-radius: 1.2rem;
  }
`;

export const FormSection = styled.div`
  /* Mobile First */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
  border-radius: 0.8rem;
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
    gap: 1.2rem;
    margin-top: 1.6rem;
    flex-direction: row;

    button {
      flex: 1;
      height: 4rem;
      border-radius: 0.6rem;
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

    /* Tablet */
    @media (min-width: 768px) {
      button {
        border-radius: 0.8rem;
      }
    }

    /* Desktop */
    @media (min-width: 1024px) {
      button {
        border-radius: 1rem;
      }
    }
  }

  /* Tablet */
  @media (min-width: 768px) {
    border-radius: 1rem;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    border-radius: 1.2rem;
  }
`;

export const AddressSection = styled.div`
  /* Mobile First */
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  /* Empty State Minimalista */
  .empty-state-minimal {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 2rem 2.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
    border-radius: 0.8rem;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_600};
      flex-shrink: 0;
    }

    p {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  /* Info Banner */
  .info-banner {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem 1.6rem;
    background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
    border-left: 3px solid ${({ theme }) => theme.COLORS.TOMATO};
    border-radius: 0.6rem;

    svg {
      color: ${({ theme }) => theme.COLORS.TOMATO};
      flex-shrink: 0;
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  /* Botões de Ação Rápida */
  .quick-add-buttons {
    display: flex;
    gap: 1.2rem;

    .add-address-btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1.6rem;
      background: transparent;
      border: 1px dashed ${({ theme }) => theme.COLORS.DARK_BORDER};
      border-radius: 0.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1.5rem;
      font-weight: 400;
      cursor: pointer;
      transition: all 200ms ease-in-out;

      svg {
        flex-shrink: 0;
      }

      &:hover {
        background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
        border-color: ${({ theme }) => theme.COLORS.TOMATO};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        svg {
          color: ${({ theme }) => theme.COLORS.TOMATO};
        }
      }
    }
  }

  /* Lista de Endereços */
  .addresses-list {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
    border-radius: 0.8rem;
    overflow: hidden;
  }

  /* Item Individual de Endereço */
  .address-item {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};

    &:last-child {
      border-bottom: none;
    }

    .address-main {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      padding: 2rem 2.4rem;
      cursor: pointer;
      transition: background 150ms ease-in-out;

      &:hover {
        background: ${({ theme }) => theme.COLORS.DARK_SURFACE};

        .chevron-icon {
          color: ${({ theme }) => theme.COLORS.TOMATO};
          transform: translateX(4px);
        }
      }

      .address-icon {
        width: 3.6rem;
        height: 3.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
        border-radius: 50%;
        flex-shrink: 0;

        svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
      }

      .address-content {
        flex: 1;
        min-width: 0;

        .address-name {
          font-size: 1.6rem;
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          margin-bottom: 0.6rem;
        }

        .address-text {
          font-size: 1.4rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          margin-bottom: 0.4rem;
        }

        .address-city {
          font-size: 1.3rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
      }

      .chevron-icon {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        transition: all 200ms ease-in-out;
        flex-shrink: 0;
        font-size: 1.6rem;
      }
    }
  }

  /* Tablet */
  @media (min-width: 768px) {
    .empty-state-minimal {
      border-radius: 1rem;
    }

    .quick-add-buttons .add-address-btn {
      border-radius: 1rem;
    }

    .addresses-list {
      border-radius: 1rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    .empty-state-minimal {
      border-radius: 1.2rem;
    }

    .quick-add-buttons .add-address-btn {
      border-radius: 1.2rem;
    }

    .addresses-list {
      border-radius: 1.2rem;
    }
  }
`;

export const LoyaltySection = styled.div`
  /* Mobile First */
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
    border-radius: 0.8rem;
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
      border-radius: 0.8rem;

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

  /* Tablet */
  @media (min-width: 768px) {
    .loyalty-card {
      border-radius: 1rem;
    }

    .loyalty-info-grid .info-card {
      border-radius: 1rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    .loyalty-card {
      border-radius: 1.2rem;
    }

    .loyalty-info-grid .info-card {
      border-radius: 1.2rem;
    }
  }
`;
