// src/components/TaskSummary.jsx

function TaskSummary({ tasks }) {
  // חישוב סך כל המשימות
  const totalTasks = tasks.length;

  // חישוב כמה משימות הושלמו
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <div>
      <h3>סיכום משימות:</h3>
      <p>
        יש {totalTasks} משימות, מתוכן {completedTasks} הושלמו.
      </p>
    </div>
  );
}

export default TaskSummary;