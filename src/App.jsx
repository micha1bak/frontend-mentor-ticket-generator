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

  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const formatedDate = getFormatedDate();
  
  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      }
      reader.readAsDataURL(file);
      
      document.getElementById('avatarInput1').style.display = 'none';
      document.getElementById('avatarInput2').style.display = 'flex';
    }
  }

  const handleRemoveImage = () => {
    setAvatar(null);
    
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

  const handleSubmit = () => {
    if (validateForm()) {
      document.getElementById('header1').style.display = 'none';
      document.getElementById('header2').style.display = 'block';
      document.getElementById('avatarInput2').style.display = 'none';
      document.getElementById('infoAvatar').style.display = 'none';
      document.getElementById('avatarTitle').style.display = 'none';
      document.getElementById('nameContainer').style.display = 'none';
      document.getElementById('emailContainer').style.display = 'none';
      document.getElementById('usernameContainer').style.display = 'none';
      document.getElementById('button').style.display = 'none';
      document.getElementById('ticket').style.display = 'flex';
    }
  }

  function validateForm() {

    let tests = 0;

    if (!avatar) {
      document.getElementById('infoAvatar').style.display = 'none';
      document.getElementById('errAvatar1').style.display = 'block';
    } else {
      document.getElementById('infoAvatar').style.display = 'block';
      document.getElementById('errAvatar1').style.display = 'none';
      tests++;
    }

    if (!name) {
      document.getElementById('errName').style.display = 'block';
      document.getElementById('name').style.outlineColor = 'oklch(0.704 0.191 22.216)';
    } else {
      document.getElementById('errName').style.display = 'none';
      document.getElementById('name').style.outlineColor = 'color-mix(in oklab, var(--color-amber-50) 60%, transparent)';
      tests++;
    }

    if (!email || !validateEmail(email)) {
      document.getElementById('errEmail').style.display = 'block';
      document.getElementById('email').style.outlineColor = 'oklch(0.704 0.191 22.216)';
    } else {
      document.getElementById('errEmail').style.display = 'none';
      document.getElementById('email').style.outlineColor = 'color-mix(in oklab, var(--color-amber-50) 60%, transparent)';
      tests++;
    }

    if (!username) {
      document.getElementById('errUsername').style.display = 'block';
      document.getElementById('username').style.outlineColor = 'oklch(0.704 0.191 22.216)';
    } else {
      document.getElementById('errUsername').style.display = 'none';
      document.getElementById('username').style.outlineColor = 'color-mix(in oklab, var(--color-amber-50) 60%, transparent)';
      tests++;
    }

    const isValid = (tests === 4) ? true : false;

    return isValid;
  }

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  function getFormatedDate() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    let formatedDate = "";

    formatedDate += months[date.getMonth()] + " ";
    formatedDate += date.getDate() + ", ";
    formatedDate += date.getFullYear();
    return formatedDate;    
  }

  return (
    <>
      <img src="public\assets\images\pattern-lines.svg" className="absolute max-h-200 -z-1"/>
      <img src="public\assets\images\pattern-squiggly-line-top.svg" className="absolute top-0 right-0 -z-1"/>
      <img src="public\assets\images\pattern-squiggly-line-bottom-mobile-tablet.svg" className="absolute -bottom-50 left-0 lg:hidden -z-1" />
      <img src="public\assets\images\pattern-squiggly-line-bottom-mobile-tablet.svg" className="hidden absolute -bottom-40 left-0 lg:block -z-1" />
      <Logo />
      <Header 
        name = {name}
        email = {email}
      />
      <Avatar 
        handleUploadImage = {handleUploadImage}
        handleChangeImage = {handleChangeImage}
        handleRemoveImage = {handleRemoveImage}
        avatar = {avatar}
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
      <Button 
        handleSubmit = {handleSubmit}
      />

      <Ticket
        avatar = {avatar}
        name = {name}
        username = {username}
        formatedDate = {formatedDate}
      />
      
    </>
  );
}

export default App;