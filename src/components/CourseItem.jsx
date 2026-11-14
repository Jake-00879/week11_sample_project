// [제공] 부모 CourseList로부터 Props를 전달받는 자식 컴포넌트입니다.
export default function CourseItem({ course, onDelete, onToggle }) { //부모로부터 3개의 proops를 받아온다
  return (
    <div className="course-row">
      <div className="course-main">
        <input
          className="check"
          type="checkbox"
          checked={course.completed} /*완료상태 여부를 체크하는 체크 박스를 만든다.*/
          onChange={() => onToggle(course.id)} //onChange 되면 onToggle이란 함수 실행시키고 id값 넘기고 
          aria-label={`${course.name} 완료 여부`} // 완료되면 넘기고  
        />
        <div>
          <div className={`course-title ${course.completed ? "done" : ""}`}> {/* 체크표시 되면 체크박스 체크되게 변경*/}
            {course.name}
          </div>
          <div className="course-id">Course #{course.id}</div>
        </div>
      </div>
      <div className="category-cell">
        <span className="category">{course.category}</span>
      </div>
      <div className="actions">
        <button
          className="btn danger"
          type="button"
          onClick={() => onDelete(course.id)} // 삭제 버튼 누르면 id값 넘기고 삭제 실행
        >
          Delete
        </button>
      </div>
    </div>
  );
}
