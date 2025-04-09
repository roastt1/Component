import React, { FC, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "save" | "cancle"; // 버튼 스타일 종류
  size?: "small" | "medium" | "large"; // 버튼 크기
  isAbled?: boolean; // 비활성화 여부
};

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  isAbled = false,
  children,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={isAbled || props.disabled}
      {...props}
    >
      {isAbled ? "disabled" : children}
    </button>
  );
};

export default Button;