import React from "react";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login/facultylogin");
  };
  return (
    <div className="flex-[0.05] flex justify-between items-center mx-5 my-2 bg-[#aaf0d1]">
      <div className="flex items-center ">
        <img
          src="https://beedesign.com.vn/wp-content/uploads/2020/06/pngtree-open-book-icon-simple-illustration-of-open-book-vector-icon-image_283605.jpg"
          alt=""
          className="h-10"
        />
        <h1 className="font-bold text-blue-600 text-sm m-2">POINT MANAGEMENT</h1>
      </div>
      <h1 className="font-semibold text-black">Welcome Everyone</h1>
      <div className="flex items-center space-x-3">
        <Avatar
          src={user.result.avatar}
          alt={user.result.name.charAt(0)}
          sx={{ width: 24, height: 24 }}
          className="border-blue-600 border-2"
        />
        <h1>{user.result.name}</h1>
        <LogoutIcon
          onClick={logout}
          className="cursor-pointer hover:scale-125 transition-all "
        />
      </div>
    </div>
  );
};

export default Header;
