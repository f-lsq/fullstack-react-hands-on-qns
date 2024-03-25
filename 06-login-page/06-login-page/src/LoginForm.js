import {useState} from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function checkValidEntries() {
    if (username === "rotiprataguy" && password=="rotiprata123") {
      alert("Login success!")
    } else {
      alert("Invalid login :(")
    }
  }

  return(
    <>
      <label for="username">Username</label>
      <input 
        id="username" 
        value={username}
        onChange={e=>setUsername(e.target.value)}
        name="login"
        className ="form-control"/>
      <label for="password">Password</label>
      <input 
        id="password" 
        value={password}
        onChange={e=>setPassword(e.target.value)}
        name="login"
        className ="form-control"/>
      <button 
        className="btn btn-primary"
        onClick={checkValidEntries}>Submit</button>
        
    </>
  )
}