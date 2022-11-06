import "./App.css";
import logo from "./logo.png";
import Dictionary from "./dictionary";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

library.add(faCirclePlay);

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="img-fluid" />{" "}
        </header>
        <Dictionary />
        <Footer />
      </div>
    </div>
  );
}

export default App;
