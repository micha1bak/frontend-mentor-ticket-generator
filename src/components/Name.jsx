import { useState } from "react";

export function Name() {

  const [name, setName] = useState("");
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <h3>Full Name</h3>
      <input 
        id="name" 
        type="text" 
        className="border border-solid border-black rounded-md" 
        onChange={handleNameChange}
        value={name}
      />
      <div className="hidden">
        <img src="assets\images\icon-info.svg" alt="info" />
        <span>Please enter your full name.</span>
      </div>
    </div>
  )
}