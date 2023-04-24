import React from "react";
import { SidebarProps } from "./Sidebar.props";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <>
      <div {...props}>
        <Menu />
      </div>
    </>
  );
};
