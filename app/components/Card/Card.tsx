import React, { FC, ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  header?: ReactNode; // 상단 커스터마이징
  body?: ReactNode; // 본문 커스터마이징
  footer?: ReactNode; // 하단 커스터마이징
};

const Card: FC<CardProps> = ({ header, body, footer, ...props }) => {
  return (
    <div className={styles.card} {...props}>
      {/* 상단: header가 있으면 렌더링 */}
      {header && <div className={styles.header}>{header}</div>}

      {/* 본문: body가 있으면 렌더링 */}
      {body && <div className={styles.body}>{body}</div>}

      {/* 하단: footer가 있으면 렌더링 */}
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;