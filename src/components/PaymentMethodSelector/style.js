import styled from "styled-components";

export const Container = styled.div`
  .options {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    .options {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const PaymentOption = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem;

  background: ${({ theme, selected }) =>
    selected ? theme.COLORS.DARK_SURFACE : "transparent"};
  border: ${({ theme, selected }) =>
    selected ? `2px solid ${theme.COLORS.TOMATO}` : `1px solid ${theme.COLORS.DARK_BORDER}`};
  border-radius: ${({ theme }) => theme.RADIUS.SM};

  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.COLORS.TOMATO};
    background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
  }

  svg {
    color: ${({ theme, selected }) =>
      selected ? theme.COLORS.TOMATO : theme.COLORS.LIGHT_400};
    min-width: 2.4rem;
    flex-shrink: 0;
  }

  .option-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
    text-align: left;
    flex: 1;

    strong {
      font-size: 1.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      line-height: 1.4;
    }

    span {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      line-height: 1.4;
    }

    .highlight {
      margin-top: 0.4rem;
      padding: 0.4rem 0.8rem;
      background: ${({ theme }) => theme.COLORS.TOMATO};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border-radius: ${({ theme }) => theme.RADIUS.XS};
      font-weight: 500;
      font-size: 1.1rem;
      width: fit-content;
    }

    .note {
      font-size: 1.2rem;
      font-style: italic;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    padding: 2rem;

    svg {
      min-width: 2.8rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    .option-info {
      strong {
        font-size: 1.7rem;
      }

      span {
        font-size: 1.4rem;
      }
    }
  }
`;
