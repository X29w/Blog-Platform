"use client";
import type { FC } from "react";

interface SanitizedContentProps extends CommonComponent {
  content: string;
}

const SanitizedContent: FC<SanitizedContentProps> = ({
  className = "",
  style,
  content,
}) => (
  <div
    className={className}
    style={style}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default SanitizedContent;
