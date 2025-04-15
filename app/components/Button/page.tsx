"use client";
import Button from "./Button";

export default function Home() {
  const handleClick = () => {
    alert("버튼 클릭됨");
  };
  return (
    <>
      <div>
        <Button variant="primary" size="long" onClick={handleClick}>
          기본
        </Button>
        <Button variant="save" size="md">
          저장하기
        </Button>
        <Button variant="cancel" size="md">
          취소하기
        </Button>
        <Button variant="cancel" size="lg">
          이전
        </Button>
        <Button variant="primary" size="lg">
          다음
        </Button>
        <Button variant="cancel" size="sm">
          거절하기
        </Button>
        <Button variant="save" size="sm">
          수락하기
        </Button>
      </div>
    </>
  );
}
