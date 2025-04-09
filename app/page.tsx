import Button from "./components/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button variant="primary" size="small">기본</Button>
      <Button variant="save" size="medium">저장하기</Button>
      <Button variant="cancle" size="large">취소하기</Button>
      <Button variant="primary" size="small" isAbled>기본</Button>
      <Button variant="save" size="medium" isAbled>저장하기</Button>
      <Button variant="cancle" size="large" isAbled>취소하기</Button>
    </div>
  );
}
