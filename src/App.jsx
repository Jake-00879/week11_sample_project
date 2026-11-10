import CourseList from "./components/CourseList.jsx"; // 컴포넌트 CourseList 불러와서 적용

export default function App() { {/*App이란 함수를 가져다가 쓸 수 있게 export했다.  */}
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="topline">OPEN SOURCE STUDIO · WEEK 11</p>
          <h1>My Course Manager</h1>
          <p className="subtitle">React Component, Props & State Practice</p>
        </div>
        <span className="tag">STUDENT STARTER</span>
      </header>
      <CourseList /> /*CourseList를 여기다가 찍는다.*/
      <footer className="bottom">
        <span>OSS Week 11 · React</span>
        <span>Local state only · Refresh resets data</span>
      </footer>
    </main>/*화면 구성하는 요소들 하나하나 찍는 역할*/
  );
}
