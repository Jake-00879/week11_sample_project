import { useState } from "react";
import CourseItem from "./CourseItem.jsx";
import { initialCourses } from "../data/courses.js";

export default function CourseList() {
  // [제공] 초기 배열을 useState로 관리합니다.
  const [courses, setCourses] = useState(initialCourses);
  const [newName, setNewName] = useState("");

  // [제공] 삭제 기능: filter로 새 배열을 만들어 업데이트합니다.
  function handleDelete(id) {
    if (!window.confirm("이 과목을 삭제하시겠습니까?")) return;
    setCourses((previous) => previous.filter((course) => course.id !== id));
  }

  // TODO 1 (필수): 과목 추가 기능을 구현하세요.
  function handleAdd(event) {
    event.preventDefault();
    // TODO: 빈 입력 검사, 새 과목 객체 생성, setCourses 호출, 입력창 초기화
    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const newid = courses[courses.length - 1].id + 1;
    const Newcourse = {
      id: newid,
      name: newName,
      category: "Major",
      completed: false,
    };
    setCourses([...courses, Newcourse]);
    setNewname("");
  }

  // TODO 2 (필수): 완료 상태 변경 기능을 구현하세요.
  // TODO: map과 spread(...)를 사용하여 해당 id의 completed를 반전

  function handleToggle(id) {
    const ncourses = courses.map((course) => {
      if (course.id == id) {
        return { ...course, completed: !course.completed };
      }
      return course;
    });
    setCourses(ncourses);
  }
  /*const search = document.querySelector("#search");
  search.addEventListener("input", function(){
    const keyword = search.value.trim().toLowerCase();
    const result = courses.filter(course =>
      course.name.toLowerCase().includes(keyword)
    );
    setCourses(result);
  }) else {
    const origin = courses;
    setCourses(origin);
  };*/
  

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
          <spanp>진행 중!!</spanp>
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
            required
            minLength={1}
            aria-label="새 과목명"
          />
          <button className="btn primary" type="submit">
            + Add Course
          </button>
        </form>
        <input
          className="input"
          id="search"
          placeholder="어떤 과목을 찾으시나요?"
          onChange={(event) => {
            const keyword = event.target.value;
          }}
        />
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
