import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import Main from "./layout/Main";
import "./assets/styles/_global.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
