import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: ${({ theme }) => theme.Z_INDEX.MODAL_BACKDROP};
  inset: 0;
`;

export const Confirm = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_BORDER};
  position: absolute;
  width: 280px;
  border-radius: ${({ theme }) => theme.RADIUS.XS};
  padding: ${({ theme }) => theme.SPACING.LG};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.SPACING.LG};

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    width: 420px;
  }

  .button-container {
    display: flex;
    gap: ${({ theme }) => theme.SPACING.LG};
    margin-top: ${({ theme }) => theme.SPACING.LG};
  }
`;
