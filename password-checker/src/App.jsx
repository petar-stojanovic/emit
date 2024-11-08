import './App.css';
import PasswordChecker from "./PasswordChecker";
import {useState} from "react";
import PasswordCheckerFirstVersion from "./PasswordCheckerFirstVersion";

function App() {

  const [version, setVersion] = useState(2)

  return (
    <main className="App">
      <div className="buttons">
        <button onClick={e => setVersion(1)}>Version 1</button>
        <button onClick={e => setVersion(2)}>Version 2</button>
      </div>
      {version === 1 && <PasswordCheckerFirstVersion/>}
      {version === 2 && <PasswordChecker/>}
    </main>
  );
}

export default App;
