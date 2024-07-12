import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AllBlog from "./Pages/AllBlog/AllBlog";
import BlogInfo from "./Pages/BlogInfo/BlogInfo";
import AdminLogin from "./Pages/Admin/AdminLogin";
import DashBoard from "./Pages/Dashboard/DashBoard";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import MyState from "./Context/Data/MyState";
import { Toaster } from "react-hot-toast";
import CreateBlog from "./Pages/CreateBlog/CreateBlog";

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allblogs" element={<AllBlog />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <DashBoard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/createblog"
            element={
              <ProtectedRouteForAdmin>
                <CreateBlog />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;

export const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("admin"));
  if (user?.user?.email === "admin08@gmail.com") {
    return children;
  }
  return <Navigate to="/adminlogin" />;
};
