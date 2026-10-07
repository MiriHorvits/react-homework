// src/App.jsx
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskSummary from './components/TaskSummary'; // 1. ייבוא קומפוננטת הסיכום

function App() {
  const userName = "ישראל ישראלי";

  const tasks = [
    { id: 1, title: "ללמוד לברך", isCompleted: true },
    { id: 2, title: "להכיר את המערכת", isCompleted: false },
    { id: 3, title: "להשלים שיעורי בית", isCompleted: true }
  ];

  return (
    <div>
      <Header userName={userName} />
      <TaskList tasks={tasks} />
      {/* 2. הצגת קומפוננטת הסיכום והעברת מערך המשימות */}
      <TaskSummary tasks={tasks} />
    </div>
  );
}

export default App;