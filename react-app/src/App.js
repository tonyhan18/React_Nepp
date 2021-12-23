import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Jsx from "./components/Jsx";

function App() {
  const name = "REACT";
  return (
    <MyComponent name={name}>
      안녕하세요.
      <div>DIV 입니다.</div>
      <Jsx />
    </MyComponent>
  );
}

export default App;
