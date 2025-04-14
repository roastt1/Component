"use client";
import Button from "./Button";

export default function Home() {
  const handleClick = () => {
    alert("버튼 클릭됨");
  };
  return (
    <>
      <div>
        <Button variant="primary" size="sm" onClick={handleClick}>
          기본
        </Button>
        <Button variant="save" size="md">
          저장하기
        </Button>
        <Button variant="cancel" size="lg">
          취소하기
        </Button>
        <Button variant="cancel" size="lg" disabled>
          취소하기
        </Button>
      </div>
    </>
  );
}
