1. Project Information
   이 프로젝트는 자신이 수강하는 과목을 등록하고 띄워주고 완료했는지 안 했는지 상태 체크를 할 수 있도록 합니다. 주요기능은 자신이 수강하는 과목을 등록할 수 있고, 화면에 보여줄 수 있고, 상태를 변경할 수 있고, 삭제할 수 있습니다.
2. Installation:
   npm install을 통해 필요한 프로그램들을 다운로드 받고 npm run dev로 실행합니다.
<img width="1917" height="1077" alt="image" src="https://github.com/user-attachments/assets/31bcd78f-c8f1-4e88-8e66-aa56e90c190f" />

3.Source Code Exploration
주요 파일 3개: CourseItem.jsx는 CourseList로부터 props를 전달받아 등록되 과목들을 화면에 어떻게 띄울지를 담당하는 component이다. CourseList.jsx는 courselist를 어떻게 띄울건지, 등록, 삭제를 어떻게 구현할 건지를 담당하는 component이다. App.jsx는 전체화면에 대한 레이아웃을 담당하고 있고 component로 CourseItem.jsx과 CourseLis.jsx를 이용하고 있다.  

Component와 Props 관계:

useState 및 Event 분석:

주요 코드 2개 설명:

Customizing: 수정한 데이터, 텍스트, 스타일 및 파일명
Feature Extension: 구현한 기능 2개 이상, 주요 코드 및 동작 결과
Deployment: 실제 접근 가능한 Vercel URL
Weekly Review:
새롭게 배운 내용 3가지
어려웠던 점과 해결 방법
AI 활용 내용 및 느낀 점
