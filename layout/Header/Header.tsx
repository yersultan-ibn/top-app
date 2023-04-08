import React from "react";
import { HeaderProps } from "./Header.props";
import cn from "classnames";
import styles from "./Sidebar.module.css";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <>
      <div {...props}>header</div>
    </>
  );
};
