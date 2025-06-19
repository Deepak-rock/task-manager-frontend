"use client"
import TaskForm from "@/components/TaskForm";
import {useRouter} from "next/navigation";
import '../globals.css';

const Add = () => {
  const router = useRouter();

  const createTask = async (task) => {
    try {
      const apiUrl = "https://task-manager-backend-e6vm.onrender.com/tasks";
      const option = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      }
      const response = await fetch(apiUrl, option);
      console.log(response.json());
    } catch (error) {
      console.log("Error in fetching API", error);
    }
  };

  const handleSubmit = async (task) => {
    await createTask(task);
    router.push("/");
  }

  return (
    <div className="page-container">
      <h1 className="page-heading ">Add Task</h1>
      <TaskForm onSubmit={handleSubmit}/>
    </div>
  );
}
export default Add;