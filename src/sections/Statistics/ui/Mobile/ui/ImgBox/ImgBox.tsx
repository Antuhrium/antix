import { AllHTMLAttributes } from "react";
import styles from "./ImgBox.module.scss";

export const ImgBox = (props: AllHTMLAttributes<HTMLDivElement>) => {
  const { src, style, className, ...otherProps } = props;
  return (
    <div
      className={`${styles.wrapper} ${className}`}
      {...otherProps}
      style={{ ...style, backgroundImage: `url(${src})` }}
    />
  );
};
