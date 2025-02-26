import { Avatar } from "./components/Avatar";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Email } from "./components/Email";
import { GithubUsername } from "./components/GithubUsername";
import { Logo } from "./components/Logo";
import { Name } from "./components/Name";
import { Ticket } from "./components/Ticket";

function App() {
  return (
    <>
      <Logo />
      <Header />
      <Avatar />
      <Name />
      <Email />
      <GithubUsername />
      <Button />

      <Ticket />
      
    </>
  );
}

export default App;