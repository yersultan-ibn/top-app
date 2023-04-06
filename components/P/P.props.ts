import {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLParagraphElement,
  ReactNode,
} from "react";

export interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "s" | "m" | "l";
  children: ReactNode;
}
