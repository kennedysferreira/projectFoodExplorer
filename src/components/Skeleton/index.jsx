import { memo } from "react";
import { Container, ImageSkeleton, ContentSkeleton, TitleSkeleton, DescriptionSkeleton, PriceSkeleton, ButtonSkeleton } from "./style";

export const Skeleton = memo(function Skeleton() {
  return (
    <Container>
      <ImageSkeleton />
      <ContentSkeleton>
        <TitleSkeleton />
        <DescriptionSkeleton />
        <PriceSkeleton />
        <ButtonSkeleton />
      </ContentSkeleton>
    </Container>
  );
});
