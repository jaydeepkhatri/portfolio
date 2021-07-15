import './styles/index.css';
import TiltCard from "./components/TiltCard";
import Cursor from './components/Cursor';
import Header from './components/Header';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Me from './components/Me';
import ScrollDown from './components/ScrollDown';
import ReactGA from 'react-ga'

import AOS from 'aos';
import 'aos/dist/aos.css';

function initializeReactGA() {
  ReactGA.initialize('G-R183VLTGFL');
  ReactGA.pageview('/Header');
}

const App = () => {
  AOS.init();
  return (
    <>
      {window.innerWidth > 800 ? <><Cursor /><TiltCard /></> : null}
      <Header />
      <Me />
      <Skills />
      <Contact />
      <ScrollDown />
    </>
  )
}

export default App;