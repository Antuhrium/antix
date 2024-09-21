import { AllHTMLAttributes, forwardRef } from "react";
import styles from "./ImgBox.module.scss";

export const ImgBox = forwardRef<
  HTMLDivElement,
  AllHTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { src, style, className, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      ref={ref}
      className={`${styles.wrapper} ${className}`}
      style={{ ...style, backgroundImage: `url(${src})` }}
    />
  );
});
