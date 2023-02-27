import React, { useState } from "react";

export const Register = (props) => {
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
const [name, setName] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
console.log(email);
};

return (
<div className="auth-form-container">
<h1>Currency Roll</h1>

<h3>The best way to buy currencies</h3>

<h2 className="setH2">
Create an account to have access to more benefits.
</h2>

<form className="register-form" onSubmit={handleSubmit}>
<label htmlFor="name"></label>
<input
value={name}
onChange={(e) => setName(e.target.value)}
type="name"
placeholder="Full name"
id="name"
name="name"
/>

<label htmlFor="email"></label>
<input
value={email}
onChange={(e) => setEmail(e.target.value)}
type="email"
placeholder="email"
id="email"
name="email"
/>

<label htmlFor="password"></label>
<input
value={pass}
onChange={(e) => setPass(e.target.value)}
type="password"
placeholder="********"
id="password"
name="password"
/>
<button type="submit">Register</button>
</form>
<button className="link-btn" onClick={() => props.onFormSwitch("login")}>
Already have an account? Login here.
</button>
</div>
);
};