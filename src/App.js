import "./App.css";
import logo from "./logo.png";
import Dictionary from "./dictionary";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";

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
