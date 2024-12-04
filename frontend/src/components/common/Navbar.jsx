import React from "react";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return(
        <nav>
            <a><img src="" alt="" className="logo" /></a>
            <ul>
                <a onClick={() => navigate("/home")}><li>Home</li></a>
                <a onClick={() => navigate("/my-quizzes")}><li>My Quizzes</li></a>
                <a onClick={() => navigate("/contact-us")}><li>Contact Us</li></a>
            </ul>
            <div className="navbar-btns">
                <button className="login"  onClick={() => navigate("/")}>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;