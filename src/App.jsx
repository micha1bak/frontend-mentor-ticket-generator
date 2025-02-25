import { Avatar } from "./components/Avatar";
import { Button } from "./components/Button";
import { DefaultHeader } from "./components/DefaultHeader";
import { Email } from "./components/Email";
import { GithubUsername } from "./components/GithubUsername";
import { Logo } from "./components/Logo";
import { Name } from "./components/Name";
import { SubmitHeader } from "./components/SubmitHeader";
import { Ticket } from "./components/Ticket";

function App() {
  return (
    <div className="App">
      <Logo />

      <DefaultHeader />
      <SubmitHeader />

      <Avatar />
      <Name />
      <Email />
      <GithubUsername />
      <Button />

      <Ticket />
      
    </div>
  );
}

export default App;