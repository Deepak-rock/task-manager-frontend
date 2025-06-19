import Link from "next/link";
import './index.css';

const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="task-card">
      <div>
        <h2 className="task-tilte">{task.title}</h2>
        {task.description ? <p className="task-description">{task.description}</p> : null}
        <div className="column">
          <p className="task-status">
            {
              task.status === "done" ? "Done" 
            : 
              task.status === "in_progress" ? "In progress" : "Todo"
            }
          </p> 
          <p className="task-duedate">{task.dueDate ? `Due Date is ${task.dueDate}` : null}</p>
        </div>
      </div>
      <div className="buttons-container">
        <Link href={`/edit/${task.id}`} className="edit-btn">
          Edit
        </Link>
        <button onClick={() => onDelete(task.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}
export default TaskCard;