"use client";
import TaskForm from "@/components/TaskForm";
import {useParams, useRouter} from "next/navigation";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import '../../globals.css';

const Edit = () => {
  const { id } = useParams();
  const router = useRouter();
  const [initial, setInitial] = useState(null);

  const getTask = async (id) => {
    try {
      const apiUrl = `https://task-manager-backend-e6vm.onrender.com/task/${id}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setInitial(data);

    } catch (error) {
      console.log("Error in fetching API", error);
    }
  };

  useEffect(() => {
    if (id) getTask(id)
  }, [id])

  const editTask = async (task, id) => {
    try {
      const apiUrl = `https://task-manager-backend-e6vm.onrender.com/tasks/${id}`;
      const option = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      }
      const response = await fetch(apiUrl, option);
      console.log(response.json());
    } catch (error) {
      console.log("Error in fetching API", error);
    }
  };

  const handleSubmit = async (updatedTask) => {
    await editTask(updatedTask, id);
    router.push("/");
  }

  return (
    <div className="page-container">
      <h1 className="page-heading ">Edit Task</h1>
      {initial ? 
        <TaskForm onSubmit={handleSubmit} initial={initial} /> 
        : 
        <div className="loader-container">
          <ClipLoader data-testid="loader"/>
        </div>
      }
    </div>
  );
}
export default Edit;