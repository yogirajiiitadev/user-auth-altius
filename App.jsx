import { useState } from 'react'
import './App.css'
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

function App() {
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  console.log("Local Storage : ", localStorage);
  
  const handleRegister = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("USER LIST : ", users);
    const matchingUsers = users.filter((user)=> user.username === username);
    console.log("userExists : ", matchingUsers);

    if(matchingUsers.length > 0){
      setMessage("User already Exists!");
    }
    else{
      users.push({username, password});
      localStorage.setItem("users", JSON.stringify(users));
      setMessage("Registration successfull!");
      console.log("Registering user : ", username);
    }
  }

  const handleLogin = (username, password) => {
    console.log("USERNAME : ", username);
    console.log("PASSWORD : ", password);
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Users : ", users);
   
    const validUsers = users.find(
      (user) => user.username === username && user.password === password
    )

    if(validUsers){
      setCurrentUser(username);
      setMessage("Login succesful!");
    }
    else{
      setMessage("Invalid username or password");
    }
  }

  const handleLogout = () => {
    setCurrentUser(null);
    setMessage("Logged Out Successfully!");
  }

  return (
    <>
      <div>
        <h1>User Registration and Authentication</h1>
        {
          currentUser ? (
            <div>
              <h2>Welcome, {currentUser}!</h2> 
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) :
          (
            <div>
              <>
                <button
                  onClick={()=> setIsRegistering(false)}
                >Login</button>
                <button
                  onClick={()=> setIsRegistering(true)}
                >Register</button>
              </>

              {
                  isRegistering ? (
                  <RegisterForm onRegister={handleRegister} />
                ) : (
                  <LoginForm onLogin = {handleLogin} />
                )
              }
            </div>
          )
        }
        { message && <p>{message}</p> }
      </div>
    </>
  )
}

export default App
