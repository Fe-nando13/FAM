import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginList from "./loginList";

export const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
    console.log(loginList);

    const emails = loginList.filter((item) => item.email === email);
    console.log(emails);
    if (emails.length === 0) {
      //email is not in loginList
      console.log("emailNaoencontrado");
    } else {
      const dataLogin = emails[0];
      //checar se a senha esta certa
      console.log(dataLogin);

      if (dataLogin.pass === pass) {
        //senha correta
        navigate("/Company");
      } else {
        //senha errada
      }
    }
  };

  return (
    <>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="youremail@mail.com"
          onChange={(e) => setEmail(e.target.value)}

        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="**********"
          onChange={(e) => setPass(e.target.value)}
          /*value={pass}*/
          /*id="password"
          name="password"*/
        />
        <button type="submit" onClick={handleSubmit}>
          Log In
        </button>
      </form>
      <h4>Do not have an account?</h4>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Register here
      </button>
    </>
  );
};
