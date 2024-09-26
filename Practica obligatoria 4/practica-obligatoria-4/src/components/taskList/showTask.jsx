const List = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'lightgray' : 'black' }}>
          {task.text}
          <button onClick={() => toggleTaskCompletion(index)}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
