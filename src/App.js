import './styles/index.css';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Me from './components/Me';
import ScrollDown from './components/ScrollDown';

import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  AOS.init();
  return (
    <>
      {window.innerWidth > 800 ? <><Cursor /></> : null}
      <Header />
      <Me />
      <Skills />
      <Contact />
      <ScrollDown />
    </>
  )
}

export default App;