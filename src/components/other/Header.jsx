import React from "react";

const Header = ({ data }) => {
  console.log(data);

  const logOut=()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload();
  }
  return (
    <div className=" flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">Ahmad 👋</span>{" "}
      </h1>
      <button onClick={logOut}className="bg-red-500 text-white px-5 py-2 text-lg font-medium">
        Log Out
      </button>
    </div>
  );
};

export default Header;
