import "./App.css";
import logo2 from "./logo2.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo2} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="vintage" />
        </main>
        <footer className="App-footer">
          <small>
            This applications was built by <strong>Olga Slahota</strong>. <br />{" "}
            It is open-sourced on{" "}
            <a
              href="https://github.com/alja1313/dictionary-project"
              target="blank"
              rel="noreferrer"
            >
              GitHub.
            </a>{" "}
            ⭐
          </small>
        </footer>
      </div>
    </div>
  );
}
