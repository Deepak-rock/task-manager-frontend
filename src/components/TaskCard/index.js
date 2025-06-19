import Link from "next/link";

const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="">
      <div>
        <h2 className="">{task.title}</h2>
        {task.description ? <p className="">{task.description}</p> : null}
        <p className="">{task.status}</p>
        {task.dueDate ? <p className="">Due Date is {task.dueDate}</p> : null}
      </div>
      <div className="">
        <Link href={`/edit/${task.id}`}>
          <button className="">Edit</button>
        </Link>
        <button onClick={() => onDelete(task.id)} className="">
          Delete
        </button>
      </div>
    </div>
  );
}
export default TaskCard;