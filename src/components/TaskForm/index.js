"use client";
import {useState} from "react";
import './index.css';

const TaskForm = ({ onSubmit, initial = {} }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "todo",
    dueDate: "",
    ...initial,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title) return alert("Title is required");
    const filteredForm = {
      title: form.title,
      status: form.status,
      ...(form.description ? {description: form.description} : {}),
      ...(form.dueDate ? {dueDate: form.dueDate} : {}),
    };
    onSubmit(filteredForm);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="title" className="custom-label">Enter the Title here</label>
      <input 
        id="title" 
        name="title" 
        placeholder="Title" value={form.title}
        onChange={handleChange} 
        className="custom-input" 
        required 
      />

      <label htmlFor="description" className="custom-label">Your Description</label>
      <textarea 
        id="description" 
        name="description" 
        placeholder="Description"
        value={form.description || ""} 
        onChange={handleChange}
        className="custom-textarea" 
      />

      <label htmlFor="status" className="custom-label">Task Status</label>
      <select 
        id="status" name="status" 
        value={form.status} 
        onChange={handleChange}
        className="custom-select"
      >
        <option value="todo">Todo</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <label htmlFor="dueDate" className="custom-label">Select Due date</label>
      <input 
        id="dueDate" 
        type="date" 
        name="dueDate" 
        value={form.dueDate || ""}
        onChange={handleChange} 
        className="custom-date" 
        />

      <button 
        type="submit" className="save-btn">
        Save
      </button>
    </form>
  );
}
export default TaskForm;