import { Avatar } from "./components/Avatar";
import { DefaultHeader } from "./components/DefaultHeader";
import { Email } from "./components/Email";
import { GithubUsername } from "./components/GithubUsername";
import { Logo } from "./components/Logo";
import { Name } from "./components/Name";

function App() {
  return (
    <div className="App">
      <Logo />
      <DefaultHeader />
      <Avatar />
      <Name />
      <Email />
      <GithubUsername />
    </div>
  );
}

export default App;