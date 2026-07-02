import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate, NavLink } from "react-router-dom";

function Nav({ userName }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAvatarClick = () => {
    navigate("/");
  };

  return (
    <div className={`nav ${show ? "nav_black" : ""}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <div className="nav_links">
        <NavLink to="/landing" className="nav_link">
          Home
        </NavLink>
        <NavLink to="/tv-shows" className="nav_link">
          TV Shows
        </NavLink>
        <NavLink to="/movies" className="nav_link">
          Movies
        </NavLink>
        <NavLink to="/documentaries" className="nav_link">
          Documentaries
        </NavLink>
      </div>

      <div className="nav_avatar_container" onClick={handleAvatarClick}>
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User Avatar"
          title="Back to profile selection"
        />
        <span className="nav_username">{userName}</span>
      </div>
    </div>
  );
}

export default Nav;
