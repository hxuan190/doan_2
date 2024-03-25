import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen w-screen bg-cover bg-center flex flex-col justify-center items-center bg-[url('https://st4.depositphotos.com/1013513/27179/i/450/depositphotos_271798852-stock-photo-happy-students-throwing-graduation-caps.jpg')]">
      <div className="md:flex flex-col items-center space-y-8 md:space-y-32">
        <div className="flex flex-row items-center space-x-4 md:space-y-0 md:flex-row md:w-[65vw]">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2020/09/Untitled-2-03.png"
            className="rounded-full h-12 w-16 md:h-16 md:w-20"
            alt="Logo"
          />
          <h1 className="text-3xl font-bold text-white w-full text-center py-2 bg-opacity-80 rounded-3xl md:text-4xl">
            ISPACE COLLEGE OF CYBERSECURITY
          </h1>
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2020/09/Untitled-2-03.png"
            className="rounded-full h-12 w-16 md:h-16 md:w-20"
            alt="Logo"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className=" h-96 md:w-96 w-full mb-8 md:mb-0 space-y-6 md:space-y-11 shadow-2xl flex flex-col justify-center items-center bg-[#2ecc71] bg-opacity-70 rounded-xl p-4">
            <h1 className="text-4xl font-extrabold text-white">Admin</h1>
            <Link
              to="/login/adminlogin"
              className="mt-4 bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200 flex items-center justify-center"
            >
              Login
            </Link>
          </div>
          <div className=" h-96 md:w-96 w-full mb-8 md:mb-0 space-y-6 md:space-y-11 shadow-2xl flex flex-col justify-center items-center bg-[#8e44ad] bg-opacity-70 rounded-xl p-4">
            <h1 className="text-4xl font-extrabold text-white">Faculty</h1>
            <Link
              to="/login/facultylogin"
              className="mt-4 bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200 flex items-center justify-center"
            >
              Login
            </Link>
          </div>
          <div className=" h-96 md:w-96 w-full space-y-6 md:space-y-11 shadow-2xl flex flex-col justify-center items-center bg-[#f39c12] bg-opacity-70 rounded-xl p-4">
            <h1 className="text-4xl font-extrabold text-white">Student</h1>
            <Link
              to="/login/studentlogin"
              className="mt-4 bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200 flex items-center justify-center"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;