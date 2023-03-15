import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass, name);
    navigate("/Company");
  };

  return (
    <>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          type="name"
          placeholder="Type your full name"
          /*value={name}*/
          /*id="name"*/
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="youremail@mail.com"
          /*value={email}
          id="email"
          name="email"*/
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="**********"
          /*value={pass}
          id="password"
          name="password"*/
        />
        <button type="submit">Log In</button>
      </form>
      <h4>Already have an account?</h4>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Login here
      </button>
    </>
  );
};



