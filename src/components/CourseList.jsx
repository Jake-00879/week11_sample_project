import { useState } from "react";
import CourseItem from "./CourseItem.jsx";
import { initialCourses } from "../data/courses.js";

export default function CourseList() {
  // [제공] 초기 배열을 useState로 관리합니다.
  const [courses, setCourses] = useState(initialCourses); // coures 라는 변수를 만들고 초기값은 initialCoures에서 가져올 거고 setCourses라는 함수로 값을 조작할 거라는 뜻
  const [newName, setNewName] = useState(""); // newName 이라는 변수를 만들거고 초기값은 ''빈칸이고 setNewName이라는 함수로 값을 조작할 거라는 뜻.

  // [제공] 삭제 기능: filter로 새 배열을 만들어 업데이트합니다.
  function handleDelete(id) {
    if (!window.confirm("이 과목을 삭제하시겠습니까?")) return; // 확인 창 띄워서 한 번 더 확인받기
    setCourses((previous) => previous.filter((course) => course.id !== id)); // 필터 이용해서 배열에서 특정 id 아닌 것만 받아서 저장
  }

  // TODO 1 (필수): 과목 추가 기능을 구현하세요.
  function handleAdd(event) {
    event.preventDefault(); // 자동전송 방지
    // TODO: 빈 입력 검사, 새 과목 객체 생성, setCourses 호출, 입력창 초기화
    event.

  }

  // TODO 2 (필수): 완료 상태 변경 기능을 구현하세요.
  function handleToggle(id) {
    // TODO: map과 spread(...)를 사용하여 해당 id의 completed를 반전
  }

  const doneCount = courses.filter((course) => course.completed).length;

  return (
    <>
      <section className="stats" aria-label="과목 통계">
        <div className="stat">
          <span>전체 과목</span>
          <strong>{courses.length}</strong> 
        </div>
        <div className="stat">
          <span>완료</span>
          <strong className="green">{doneCount}</strong> 
        </div>
        <div className="stat">
          <span>진행 중</span>
          <strong className="blue">{courses.length - doneCount}</strong> 
        </div>
      </section>
      <section className="panel">
        <div className="panel-header">
          <h2>My Courses</h2>
          <span className="small-note">{courses.length} courses</span>
        </div>
        <p className="todo">
          실습 과제: 아래 Add 버튼과 완료 체크박스의 기능을 직접 구현하세요.
        </p>
        <form className="add-form" onSubmit={handleAdd}>
          <input
            className="input"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            placeholder="새 과목명을 입력하세요"
            aria-label="새 과목명"
          />
          <button className="btn primary" type="submit">
            + Add Course
          </button>
        </form>
        <div className="list-head">
          <span>COURSE</span>
          <span>CATEGORY</span>
          <span>ACTIONS</span>
        </div>
        {courses.length === 0 && (
          <div className="empty">등록된 과목이 없습니다.</div>
        )}
        {courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </section>
    </>
  );
}
