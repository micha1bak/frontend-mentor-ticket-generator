import { Avatar } from "./components/Avatar";
import { DefaultHeader } from "./components/DefaultHeader";
import { Logo } from "./components/Logo";
import { Name } from "./components/Name";

function App() {
  return (
    <div className="App">
      <Logo />
      <DefaultHeader />
      <Avatar />
      <Name />
    </div>
  );
}

export default App;