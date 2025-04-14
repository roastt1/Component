"use client";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import styles from "./components/Card/Card.module.scss";
import CountStoreComponent from "./zustand/zustand";

export default function Home() {
  const handleClick = () => {
    alert("버튼 클릭됨");
    console.log(styles);
  };
  return (
    <>
      <div>
        <Button variant="primary" size="sm" onClick={handleClick} fullWidth>
          기본
        </Button>
        <Button variant="save" size="md">
          저장하기
        </Button>
        <Button variant="cancel" size="lg">
          취소하기
        </Button>
        <Button variant="primary" size="sm">
          기본
        </Button>
        <Button variant="save" size="md">
          저장하기
        </Button>
        <Button variant="cancel" size="lg" disabled>
          취소하기
        </Button>
      </div>

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
      <CountStoreComponent />
    </>
  );
}
