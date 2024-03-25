import React, {useState} from 'react'

export default function RegisterForm() {

    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameInput = (e) => {
      let username = e.target.value;
      if (username.length < 4 || username.length > 10 ) {
        setUsername("Username must be between 4 to 10 characters long.")
      } else {
        setUsername("")
      }
    };
    const handleEmailInput  = (e) => {

    };
    const handlePasswordInput  = (e) => {

    };

    return (
      <React.Fragment>
        <div>
            <label>Username:</label>
            <input type="text" name="username" 
                   className="form-control"
                   onChange={handleUsernameInput}/>
            <span class="error">{userName}</span>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" name="email" 
                   className="form-control"
                   onChange={handleEmailInput}/>
            <span class="error">{email}</span>
        </div>
        <div>
            <label>Password:</label>
            <input type="text" name="password" 
                   className="form-control"
                   onChange={handlePasswordInput}/>
            <span class="error">{password}</span>
        </div>
      </React.Fragment>
    )
}