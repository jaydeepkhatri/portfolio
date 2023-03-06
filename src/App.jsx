import './styles/main.scss';
import {
  Cursor, Header, Me, Projects, Skills, Footer, ScrollDown
} from './components';

function App() {
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
