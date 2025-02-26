import { Avatar } from "./components/Avatar";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Email } from "./components/Email";
import { GithubUsername } from "./components/GithubUsername";
import { Logo } from "./components/Logo";
import { Name } from "./components/Name";
import { Ticket } from "./components/Ticket";

import { useState } from "react";

function App() {

  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
      
  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      }
      reader.readAsDataURL(file);
      
      document.getElementById('avatarInput1').style.display = 'none';
      document.getElementById('avatarInput2').style.display = 'flex';
    }
  }

  const handleRemoveImage = () => {
    setPreview(null);
    
    document.getElementById('avatarInput1').style.display = 'flex';
    document.getElementById('avatarInput2').style.display = 'none';
  }

  const handleChangeImage = () => {
    document.getElementById("inputFile").click();
  }
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
 
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }


  return (
    <>
      <Logo />
      <Header />
      <Avatar 
        handleUploadImage = {handleUploadImage}
        handleChangeImage = {handleChangeImage}
        handleRemoveImage = {handleRemoveImage}
        preview = {preview}
      />
      <Name 
        handleNameChange = {handleNameChange}
        name = {name}
      />
      <Email 
        handleEmailChange = {handleEmailChange}
        email = {email}
      />
      <GithubUsername 
        handleUsernameChange = {handleUsernameChange}
        username = {username}
      />
      <Button />

      <Ticket />
      
    </>
  );
}

export default App;