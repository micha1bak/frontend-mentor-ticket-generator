import { useState } from "react";

export function GithubUsername() {

  const [username, setUsername] = useState("");
      
      const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      }

  return (
    <div>
      <h3>Github Username</h3>
      <input 
        type="text" 
        placeholder="@yourusername" 
        className="border border-solid border-black rounded-md"
        onChange={handleUsernameChange}
        value={username}
      />
      <div className="hidden">
        <img src="assets\images\icon-info.svg" alt="info" />
        <span>Please enter your Github username.</span>
      </div>
    </div>
  )
}