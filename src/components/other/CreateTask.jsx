import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [task, setTask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });
    const data = userData;
    console.log(data);

    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(task);

        elem.taskCount.newTask = elem.taskCount.newTask + 1;
      }
    });
    setUserData(data);
    localStorage.setItem("employees", JSON.stringify(data));
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex w-full  items-start justify-between flex-wrap"
      >
        <div className="w-1/2 ">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Make Design"
              className="w-4/5  text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="w-4/5  text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              placeholder="Employee Name"
              className=" text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] w-4/5 border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>

            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder="design,dev etc"
              className="w-4/5  text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
