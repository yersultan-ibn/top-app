import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: "primary" | "ghost";
  arrow?: "right" | "down" | "none";
  chdildren: ReactNode;
}
