import {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLDivElement,
  ReactNode,
} from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m";
  chdildren: ReactNode;
  color?: "ghost" | "red" | "gray" | "green" | "primary";
  href?: string;
}
