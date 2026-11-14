import CourseList from "./components/CourseList.jsx"; 
export default function App() { 
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="topline">OPEN SOURCE STUDIO · WEEK 11</p>
          <h1>내 수업관리</h1>
          <p className="subtitle">주말마다 쌓인 과제 중 해야 할 거, 안 한 거 구분해줌</p>
        </div>
        <span className="tag">STUDENT STARTER</span>
      </header>
      <CourseList /> 
      <footer className="bottom">
        <span>OSS Week 11 · React</span>
        <span>Local state only · Refresh resets data</span>
      </footer>
    </main>
  );
}
