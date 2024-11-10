import React from "react";
import AcceptTask from "./AcceptTask";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto py-5 w-full  mt-5 flex items-center justify-start gap-5 flex-nowrap"
    >
      <AcceptTask/>
      <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl ">
        <div className="flex justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make assignment</h2>
        <p className="text-sm mt-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloribus temporibus doloremque corrupti fugiat laborum.
        </p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl ">
        <div className="flex justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make assignment</h2>
        <p className="text-sm mt-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloribus temporibus doloremque corrupti fugiat laborum.
        </p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl ">
        <div className="flex justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make assignment</h2>
        <p className="text-sm mt-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloribus temporibus doloremque corrupti fugiat laborum.
        </p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-orange-400 rounded-xl ">
        <div className="flex justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make assignment</h2>
        <p className="text-sm mt-2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          doloribus temporibus doloremque corrupti fugiat laborum.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
