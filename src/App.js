import "./styles/main.css";
import {Cursor, Header, Me, Projects, Skills, Footer, ScrollDown} from "./components";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Header />
      <main>
        <Me />
        <Projects />
        <Skills />
      </main>
      <Footer />
      <ScrollDown />
    </div>
  );
}

export default App;