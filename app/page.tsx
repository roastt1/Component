'use client';
import Button from "./components/Button";
import styles from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    alert("버튼 클릭됨");
  };
  return (
    <div className={styles.page}>
      <Button variant="primary" size="sm" onClick={handleClick}>기본</Button>
      <Button variant="save" size="md">저장하기</Button>
      <Button variant="cancel" size="lg">취소하기</Button>
      <Button variant="primary" size="sm">기본</Button>
      <Button variant="save" size="md">저장하기</Button>
      <Button variant="cancel" size="lg" disabled>취소하기</Button>
    </div>
  );
}
