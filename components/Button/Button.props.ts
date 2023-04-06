import { ReactNode } from "react";
import { Button } from "./Button";

export interface ButtonProps {
  children: ReactNode;
  appearance: "primary" | "ghost";
}
