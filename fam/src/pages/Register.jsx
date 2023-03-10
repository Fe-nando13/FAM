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
<>
<form className="register-form">
<label htmlFor="name">Full name</label>
<input
value={name}
name="name"
id="name"
placeholder="type your full name"
/>
<label htmlFor="email">Email</label>
<input
value={email}
type="email"
placeholder="youremail@mail.com"
id="email"
name="email"
/>

<label htmlFor="password">Password</label>
<input
value={pass}
type="password"
placeholder="**********"
id="password"
name="password"
/>
<button type="submit">Log In</button>
</form>
<button className="link-btn" onClick={() => props.onFormSwitch("login")}>
Already have an account? Login here.
</button>
</>
);
};


