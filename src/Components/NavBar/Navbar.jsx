import React from "react";
import {
  Navbar as MTNavbar,
  Typography,
  IconButton,
  Avatar,
  Collapse,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa"; // Code icon
import { MdDarkMode, MdLightMode } from "react-icons/md"; // Light and dark mode icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menu and Close icons
import myContext from "../../Context/Data/MyContext";
import ShareDialogBox from "../ShareDialogBox/ShareDialogBox";

const Navbar = () => {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);
  const context = useContext(myContext);
  const { mode, toggleMode } = context;
  const admin = localStorage.getItem("admin");

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["/", "/allblogs", "/adminlogin"].map((path, index) => (
        <Typography
          as="li"
          key={index}
          variant="small"
          className="p-1 font-normal text-gray-900 hover:text-blue-600 transition-colors duration-200 hover:bg-blue-100 rounded-md"
        >
          <Link to={path} className="flex items-center">
            {path === "/" ? "Home" : path === "/allblogs" ? "Blogs" : "Admin Login"}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <>
      <MTNavbar
        className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2"
        style={{ background: mode === "dark" ? "linear-gradient(90deg, #1e3a8a, #4b5563)" : "linear-gradient(90deg, #f8fafc, #e5e7eb)" }}
      >
        <div className="flex items-center justify-between text-gray-900">
          <Link to={"/"}>
            <Typography
              as="a"
              className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex items-center gap-2"
              style={{ color: mode === "dark" ? "white" : "black" }}
            >
              <FaCode className="w-6 h-6" />
              <span>CodeClan</span>
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <div className="hidden lg:block">
              <ShareDialogBox />
            </div>
            <div>
              {admin && (
                <Link to={"/dashboard"}>
                  <Avatar
                    src={"https://cdn-icons-png.flaticon.com/128/3135/3135715.png"}
                    alt="avatar"
                    withBorder={true}
                    className="p-0.5 w-10 h-10 border-2 rounded-full"
                    style={{
                      borderColor: mode === "dark" ? "white" : "#1e3a8a",
                    }}
                  />
                </Link>
              )}
            </div>
            <div>
              <IconButton
                onClick={toggleMode}
                className="rounded-full shadow"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding:"1.4rem",

                  background: mode === "light" ? "#fff" : "#4b5563",
                  color: mode === "dark" ? "white" : "black",
                }}
              >
                {mode === "light" ? <MdDarkMode className="w-6 h-6" /> : <MdLightMode className="w-6 h-6" />}
              </IconButton>
            </div>
            <div>
              <IconButton
                className="ml-auto h-8 w-8 text-inherit shadow rounded-full lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
padding:"1.4rem",
                  background: mode === "light" ? "#fff" : "#4b5563",
                  color: mode === "dark" ? "white" : "black",
                }}
              >
                {openNav ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
              </IconButton>
            </div>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
        </Collapse>
      </MTNavbar>
    </>
  );
};

export default Navbar;
