import React, { FC, ButtonHTMLAttributes } from "react";
import styles from "./LoginButton.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "kakao" | "google"; // 버튼 스타일 종류
};

const LoginButton: FC<ButtonProps> = ({
  variant = "google",
  ...props
}) => {
    return (
        <button className={styles[variant]} {...props}>
          <span className={styles.icon}></span>
          <span className={styles.buttonText}>구글로 계속하기</span>
        </button>
      );
};

export default LoginButton;