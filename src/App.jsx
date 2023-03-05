import './styles/main.scss';
import AOS from 'aos';
import {
  Cursor, Header, Me, Projects, Skills, Footer, ScrollDown
} from './components';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <div className="App">
      <Cursor />
      <main>
        <Header />
        <Me />
        <Projects />
        <Skills />
        <Footer />
      </main>
      <ScrollDown />
    </div>
  );
}

export default App;
