import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { Button } from "./Button";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  appearance: "primary" | "ghost";
}
