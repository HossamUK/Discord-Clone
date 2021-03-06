import React, { useState } from "react";
import "./login.css";
import { BsPlayFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setUser } from "../redux";

export default function Login() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const open = (e) => {
    e.preventDefault();
    dispatch({
      type: setUser.type,
      user: name,
    });
  };
  return (
    <div className="login">
      <h1 className="login_logo">Discord</h1>
      <div className="login__box">
        <h1>Welcome to Discord</h1>
        <p>Please Enter Your Name</p>
        <form className="box_in">
          <div className="box-input">
            <input
              placeholder="Enter a name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <hr></hr>
          </div>
          <div className="box-button">
            <button type="submit" onClick={open}>
              <BsPlayFill className="box_icon"></BsPlayFill>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
