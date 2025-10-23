import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  min-width: 21rem;
  max-width: 21rem;
  height: 29.2rem;
  background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
  border-radius: ${({ theme }) => theme.RADIUS.LG};
  padding: ${({ theme }) => theme.SPACING.LG};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.SPACING.SM};
  position: relative;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.SMALL}) {
    min-width: 25rem;
    max-width: 25rem;
    height: 32rem;
  }

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    min-width: 30.4rem;
    max-width: 30.4rem;
    height: 46.2rem;
  }
`;

const skeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.COLORS.DARK_SURFACE} 0px,
    ${({ theme }) => theme.COLORS.DARK_BORDER} 40px,
    ${({ theme }) => theme.COLORS.DARK_SURFACE} 80px
  );
  background-size: 468px;
  animation: ${shimmer} 1.5s infinite ease-out;
  border-radius: ${({ theme }) => theme.RADIUS.MD};
`;

export const ImageSkeleton = styled(skeletonBase)`
  width: 17.6rem;
  height: 17.6rem;
  border-radius: 50%;
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    width: 26.4rem;
    height: 26.4rem;
  }
`;

export const ContentSkeleton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.SPACING.XS};
  flex: 1;
`;

export const TitleSkeleton = styled(skeletonBase)`
  width: 70%;
  height: 2rem;
  margin-top: ${({ theme }) => theme.SPACING.XS};

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    height: 2.4rem;
    margin-top: ${({ theme }) => theme.SPACING.SM};
  }
`;

export const DescriptionSkeleton = styled(skeletonBase)`
  width: 90%;
  height: 3.2rem;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    height: 4.4rem;
  }
`;

export const PriceSkeleton = styled(skeletonBase)`
  width: 40%;
  height: 2.4rem;
  margin-top: auto;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    height: 3.2rem;
  }
`;

export const ButtonSkeleton = styled(skeletonBase)`
  width: 100%;
  height: 3.2rem;
  border-radius: ${({ theme }) => theme.RADIUS.MD};

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    height: 4.8rem;
  }
`;
