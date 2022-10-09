import "./styles/main.css";
import {Cursor, Header, Me, Projects, Skills, Footer, ScrollDown} from "./components";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
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