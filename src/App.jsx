import React, { useContext } from "react";
import Login from "./components/Auth/Login";
import Header from "./components/other/Header";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { useEffect, useState } from "react";

import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData);

useEffect(() => {
if(authData){
  const loggedInUser=localStorage.getItem("loggedInUser")
  if(loggedInUser){
    setUser(loggedInUser.role)
  }
}
}, [authData])




  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (
      authData &&
      authData.employees.find((e) => e.email == email && e.password == password)
    ) {
      setUser("employee");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    } else {
      console.log("invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
