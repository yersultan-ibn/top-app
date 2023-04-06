import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  chdildren: ReactNode;
  size?: "s" | "l" | "m";
}
