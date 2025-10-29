import styled from "styled-components";

export const Container = styled.div`
  .options {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    .options {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const DeliveryOption = styled.button`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 2rem;

  background: ${({ theme, selected }) =>
    selected ? theme.COLORS.DARK_SURFACE : theme.COLORS.DARK_ELEVATED};
  border: 2px solid ${({ theme, selected }) =>
    selected ? theme.COLORS.TOMATO : theme.COLORS.DARK_SURFACE};
  border-radius: ${({ theme }) => theme.RADIUS.SM};

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
    align-items: flex-start;
    gap: 0.4rem;
    text-align: left;

    strong {
      font-size: 1.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    .fee {
      margin-top: 0.4rem;
      font-weight: 500;
      color: ${({ theme, selected }) =>
        selected ? theme.COLORS.TOMATO : theme.COLORS.LIGHT_500};
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    .option-info {
      strong {
        font-size: 1.8rem;
      }

      span {
        font-size: 1.5rem;
      }
    }
  }
`;
