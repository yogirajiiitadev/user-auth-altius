import React, {useState} from 'react'

const LoginForm = ({onLogin}) => {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(null); 
    console.log("Login Form rendered!!");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
        setUsername("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setAge(null);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login Form</h2>
            <label>Username</label>
            <input
                type = "text"
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
                required 
            />
            <label>Password</label>
            <input
                type = "password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                required 
            />
            <label>First Name</label>
            <input
                type = "text"
                value = {firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Last Name</label>
            <input
                type = "text"
                value = {lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <label>Age</label>
            <input
                type = "number"
                value = {age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm