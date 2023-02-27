import React, { useState } from "react";

export const Login = (props) => {
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
console.log(email);
};

return (
<div className="auth-form-container">
<h1>Currency Roll</h1>

<h3>The best way to buy currencies</h3>

<button
className="link-btn"
onClick={() => props.onFormSwitch("Register")}
>
Create an account to have access to more benefits.
</button>

<form className="login-form" onSubmit={handleSubmit}>
<label for="email"></label>
<input
value={email}
onChange={(e) => setEmail(e.target.value)}
type="email"
placeholder="email"
id="email"
name="email"
/>
<label for="password"></label>
<input
value={pass}
onChange={(e) => setPass(e.target.value)}
type="password"
placeholder="password"
id="password"
name="password"
/>
<button type="submit">Login</button>
</form>
</div>
);
};
