import React from "react";
import styles from "../Tag/Tag.module.css";
import cn from "classnames";
import { TagProps } from "./Tag.props";

export const Tag = ({
  size = "s",
  className,
  color = "ghost",
  href,
  children,
  ...props
}: TagProps) => {
  return (
    <div
      className={
        (cn(styles.tag),
        className,
        {
          [styles.ghost]: color === "ghost",
          [styles.red]: color === "red",
          [styles.green]: color === "green",
          [styles.gray]: color === "gray",
          [styles.primary]: color === "primary",
        })
      }
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
      {children}
    </div>
  );
};
