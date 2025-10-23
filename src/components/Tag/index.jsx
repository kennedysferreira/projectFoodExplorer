import { memo } from "react";
import { Container } from "./style";

export const Tag = memo(function Tag({ title }) {
  return <Container>{title}</Container>;
});
