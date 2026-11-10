import React from "react"; {/* react에서 React라는 걸 가져와서 적용한다. */}
import ReactDOM from "react-dom/client"; {/* react-dom/client에서 ReactDOM(react로 만든 화면을 실제 웹 브라우저에 연결해주는 역할)이란 걸 가져와서 적용한다. */}
import App from "./App.jsx"; {/* app.jsx에 있는 App(메인 화면 찍는 역할)이란 걸 가져와서 적용한다. */}
import "./App.css"; {/* app.css를 불러와서 적용한다. */}

ReactDOM.createRoot(document.getElementById("root")).render(
  /*ReactDOM에다가 root를 만든다. id가 root인 첫 번째 요소를 불러와서 거기에 렌더링한다.*/
  <React.StrictMode> 
    <App /> /*App.jsx에서 가져온 화면에 찍을 내용을 찍는다. */
  </React.StrictMode>, 
);
