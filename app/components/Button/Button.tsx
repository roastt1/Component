import React, { FC, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "save" | "cancel"; // 버튼 스타일 종류
  size?: "sm" | "md" | "lg"; // 버튼 크기
  isDisabled?: boolean; // 비활성화 여부
  fullWidth?: boolean; // 가로 전체 사용 여부
};

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  children, // 버튼 텍스트
  ...props// 나머지 props ex) onClick등
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles["button_"+size]} ${fullWidth ? styles.fullWidth : ""}`}
      {...props} // 나머지 props 전달
    >
      {children}
    </button>
  );
};

export default Button;
