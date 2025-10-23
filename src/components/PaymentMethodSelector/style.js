import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h3 {
    font-family: "Poppins";
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .options {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    .options {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const PaymentOption = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 2rem;

  background: ${({ theme, selected }) =>
    selected ? theme.COLORS.DARK_SURFACE : theme.COLORS.DARK_ELEVATED};
  border: 2px solid ${({ theme, selected }) =>
    selected ? theme.COLORS.TOMATO : theme.COLORS.DARK_SURFACE};
  border-radius: 8px;

  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.COLORS.TOMATO};
    transform: translateY(-2px);
  }

  svg {
    color: ${({ theme, selected }) =>
      selected ? theme.COLORS.TOMATO : theme.COLORS.LIGHT_400};
    min-width: 3.2rem;
  }

  .option-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    text-align: center;

    strong {
      font-size: 1.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    span {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    .highlight {
      margin-top: 0.4rem;
      padding: 0.4rem 0.8rem;
      background: ${({ theme }) => theme.COLORS.TOMATO};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border-radius: 4px;
      font-weight: 500;
      font-size: 1.2rem;
    }

    .note {
      font-size: 1.2rem;
      font-style: italic;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    .option-info {
      strong {
        font-size: 1.8rem;
      }

      span {
        font-size: 1.4rem;
      }
    }
  }
`;
