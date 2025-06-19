"use client";
import {useEffect, useState} from "react";
import { ClipLoader } from "react-spinners";
import TaskCard from "@/components/TaskCard";
import {useRouter} from "next/navigation";

import './index.css';

const apiContants = {
  initial: "initial",
  success: "success",
  failure: "failure",
  inprogress: "loading"
}

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [apiStatus, setApistatus] = useState(apiContants.initial);
  const [taskStatus, setTaskStatus] = useState("all");

  useEffect(() => {
    setApistatus(apiContants.inprogress);
    const fetchTasks = async () => {
      try {
        const response = await fetch("https://task-manager-backend-e6vm.onrender.com/tasks");
        const data = await response.json();
        if (data) {
          setTasks(data);
          setApistatus(apiContants.success);
        }
      } catch (error) {
        setApistatus(apiContants.failure);
        console.log("Error in fetching API", error);
      }
    };
    fetchTasks();
  }, []);

  const getFilterTask = tasks.filter(task => {
    if (taskStatus === "all") {
      return true;
    }
    return task.status === taskStatus;
  });

  const deleteTask = async (id) => {
    const apiUrl = `https://task-manager-backend-e6vm.onrender.com/tasks/${id}`;
    const option = {
      method: "DELETE"
    }
    await fetch(apiUrl, option);
  }

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t.id !== id));
  }

  const router = useRouter();

  const renderApifailureView = () => (
    <div>
      <h1>Unable Fetch Tasks</h1>
    </div>
  );
  
  const renderLoader = () => (
    <div className="loader-container">
      <ClipLoader data-testid="loader"/>
    </div>
  );

  const renderSuccessView = () => (
    <div className="tasks-container">
      {getFilterTask.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={handleDelete}/>
      ))}
    </div>
  );

  const renderHomeTask = () => {
      switch (apiStatus) {
        case apiContants.failure:
          return renderApifailureView();
        case apiContants.inprogress:
          return renderLoader();
        case apiContants.success:
          return renderSuccessView();
        default:
          return null;
    }
  };

  return (
    <div className="app-container">
      <div className="responsive-con">
        <h1 className="heading">Task Manager</h1>

        <div className="create-task-container">
          <p className="create-task">
            Create <span className="create-task-subpart">Task</span>
          </p>
          <button onClick={() => router.push("/add")} className="add-button">+ Add Task</button>
        </div>

        <h3 className="filter-heading">Filter by Task status</h3>

        <div className="filter-container">
          <button 
            className={taskStatus === "all" ? "active-task-status-btn" : "task-status-btn"} 
            type="button" 
            onClick={() => setTaskStatus('all')}
          >
            All
          </button>
          <button 
            className={taskStatus === "todo" ? "active-task-status-btn" : "task-status-btn"} 
            type="button" 
            onClick={() => setTaskStatus('todo')}
          >
            Todo
          </button>
          <button 
            className={taskStatus === "in_progress" ? "active-task-status-btn" : "task-status-btn"} 
            type="button" 
            onClick={() => setTaskStatus('in_progress')}
          >
            In Progress
          </button>
          <button 
            className={taskStatus === "done" ? "active-task-status-btn" : "task-status-btn"} 
            type="button" 
            onClick={() => setTaskStatus('done')}
          >
            Done
          </button>
        </div>

        {renderHomeTask()}
      </div>
    </div>
  );
}
export default Home;