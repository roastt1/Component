// Card.tsx
import React, { FC } from "react";
import styles from "./Card.module.scss";

// 카드 컴포넌트의 Props 타입 정의
type CardProps = {
  userId: string; // 유저 아이디
  type: "project" | "profile"; // 카드 타입
  title: string; // 카드 제목
  likeCount: number; // 좋아요 수
  category: "프로젝트" | "프로필"; // 카테고리
  deadline?: string; // 마감일
  profileImage?: string; // 프로필 이미지 URL
};

const Card: FC<CardProps> = ({
  userId,
  type,
  title,
  likeCount,
  category,
  deadline,
  profileImage,
  ...props
}) => {
  return (
    <div className={styles.card} {...props}>
      {/* 상단: 카테고리 표시 */}
      <div className={styles.header}>
        <span className={`${styles.category} ${styles[category]}`}>
          {category}
        </span>
        <span>
            대충 마감임박
        </span>
      </div>

      {/* 본문: 글 마감일, 타이틀 */}
      <div className={styles.body}>
        {type === "project" && deadline && (
          <div className={styles.deadline}>마감일 | {deadline}</div>
        )}
        <div className={styles.title}>{title}</div>
      </div>

      {/* 하단: 프사, 닉네임, 찜 수 */}
      <div className={styles.footer}>
        <div className={styles.userInfo}>
          {profileImage && (
            <img src={profileImage} className={styles.profileImage} />
          )}
          <span>{userId}</span>
        </div>
        <span>❤️ 좋아요 {likeCount}</span>
      </div>
    </div>
  );
};

export default Card;
