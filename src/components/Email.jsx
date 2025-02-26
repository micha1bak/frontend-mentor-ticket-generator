import { useState } from "react";

export function Email() {
  
  const [email, setEmail] = useState("");
    
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    }
  
  return (
    <div>
      <h3>Email Address</h3>
      <input 
        type="email" 
        placeholder="example@email.com"
        className="border border-solid border-black rounded-md"
        onChange={handleEmailChange}
        value={email}
      />
      <div className="hidden">
        <img src="assets\images\icon-info.svg" alt="info" />
        <span>Please enter a valid email address.</span>
      </div>
    </div>
  )
}