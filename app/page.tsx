"use client";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import styles from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    alert("버튼 클릭됨");
  };
  return (
    <>
      <div className={styles.page}>
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
          type="project"
          title="나랑 레전드 프로젝트 할사람!!!"
          category="프로젝트"
          deadline="2025.04.17"
          likeCount={30}
          userId="박준선"
          profileImage="https://codingapple-cdn.b-cdn.net/wp-content/uploads/2023/01/food0.png"
        />

        <Card
          type="profile"
          title="이 프로필 레전드임.. 진짜 대박.."
          category="프로필"
          likeCount={15}
          userId="멋쟁이사자처럼"
          profileImage="https://codingapple-cdn.b-cdn.net/wp-content/uploads/2023/01/food2.png"
        />

<Card
          type="project"
          title="나랑 레전드 프로젝트할사람!!!나랑 레전드 프로젝트할사람!!!나랑 레전드 프로젝트할사람!!!나랑 레전드 프로젝트할사람!!!"
          category="프로젝트"
          deadline="2025.04.17"
          likeCount={30}
          userId="박준선"
          profileImage="https://codingapple-cdn.b-cdn.net/wp-content/uploads/2023/01/food0.png"
        />

        <Card
          type="profile"
          title="이 프로필 레전드임.. 진짜 대박.. 박"
          category="프로필"
          likeCount={15}
          userId="멋쟁이사자처럼"
          profileImage="https://codingapple-cdn.b-cdn.net/wp-content/uploads/2023/01/food2.png"
        />

<Card
          type="project"
          title="나랑 레전드 프로젝트!"
          category="프로젝트"
          deadline="2025.04.17"
          likeCount={30}
          userId="박준선"
          profileImage="https://codingapple-cdn.b-cdn.net/wp-content/uploads/2023/01/food0.png"
        />

        <Card
          type="profile"
          title="이 프로필 레전드임.. 진짜 대박.. "
          category="프로필"
          likeCount={15}
          userId="멋쟁이사자처럼"
          profileImage="https://codingapple-cdn.b-cdn.net/wp-content/uploads/2023/01/food2.png"
        />
        <Card
          type="project"
          title="나랑 레전드 프로젝트 할사람!!!나랑 레전드 프로젝트 할사람!!!"
          category="프로젝트"
          deadline="2025.04.17"
          likeCount={30}
          userId="박준선"
          profileImage="https://codingapple-cdn.b-cdn.net/wp-content/uploads/2023/01/food0.png"
        />

        <Card
          type="profile"
          title="이 프로필 레전드임.. 진짜 대박.. 대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박대박"
          category="프로필"
          likeCount={15}
          userId="멋쟁이사자처럼"
          profileImage="https://codingapple-cdn.b-cdn.net/wp-content/uploads/2023/01/food2.png"
        />
        <Card
          type="project"
          title="나랑 레전드 프로젝트 할사람!!!나랑 레전드 프로젝트 할사람!!!나랑 레전드 프로젝트 할사람!!!나랑 레전드 프로젝트 할사람!!!나랑 레전드 프로젝트 할사람!!!나랑 레전드 프로젝트 할사람!!!나랑 레전드 프로젝트 할사람!!!나랑 레전드 프로젝트 할사람!!!"
          category="프로젝트"
          deadline="2025.04.17"
          likeCount={30}
          userId="박준선"
          profileImage="https://codingapple-cdn.b-cdn.net/wp-content/uploads/2023/01/food0.png"
        />

        <Card
          type="profile"
          title="이 프로필 레전드임"
          category="프로필"
          likeCount={15}
          userId="멋쟁이사자처럼"
          profileImage="https://codingapple-cdn.b-cdn.net/wp-content/uploads/2023/01/food2.png"
        />
      </div>
    </>
  );
}
