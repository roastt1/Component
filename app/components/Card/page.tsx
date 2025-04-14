"use client";
import Card from "./Card";
import styles from "./Card.module.scss";

export default function Home() {
  return (
    <>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Card
          header={
            <span className={`${styles.category} ${styles["프로젝트"]}`}>
              프로젝트
            </span>
          }
          body={
            <>
              <div className={styles.deadline}>마감일 | 2025.04.17</div>
              <div className={styles.title}>나랑 프로젝트 할 사람!</div>
            </>
          }
          footer={
            <div className={styles.userInfo}>
              <div className={styles.profileImageContainer}>
                <img
                  src="https://codingapple-cdn.b-cdn.net/wp-content/uploads/2023/01/food2.png"
                  alt="프로필 이미지"
                  className={styles.profileImage}
                />
              </div>
              <span>박준선</span>
              <span>❤️ 좋아요 30</span>
            </div>
          }
        ></Card>
      </div>
    </>
  );
}
