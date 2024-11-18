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
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext);
  

  useEffect(() => {
  
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        const userData=JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
  },[]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser( 'admin' );
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
    } else if (userData) {
     const employee= userData.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: 'employee',data:employee })
        );
      }
      }

       else {
      console.log("invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard /> : (user=='employee'?<EmployeeDashboard data={loggedInUserData}/>:null)}
    </>
  );
};

export default App;
