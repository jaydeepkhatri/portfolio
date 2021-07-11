import './styles/index.css';
import TiltCard from "./components/TiltCard";
import Cursor from './components/Cursor';
import Header from './components/Header';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  AOS.init();
  return (
    <>
      {window.innerWidth > 800 ? <><Cursor /><TiltCard /></> : null}
      <Header />
      <Contact />
    </>
  )
}

export default App;