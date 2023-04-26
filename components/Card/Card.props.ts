import {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLParagraphElement,
  ReactNode,
} from "react";

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: "white" | "blue";
  children: ReactNode;
}
