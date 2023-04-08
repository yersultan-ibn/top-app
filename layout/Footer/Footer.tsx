import React from "react";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Sidebar.module.css";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <>
      <div {...props}>Footer</div>
    </>
  );
};
