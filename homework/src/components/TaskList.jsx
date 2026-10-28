// src/components/TaskList.jsx

function TaskList({ tasks }) {
  return (
    <div>
      <h3>רשימת משימות:</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span> - 
            <span>{task.isCompleted ? " הושלם" : " בביצוע"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;