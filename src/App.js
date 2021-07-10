import './styles/index.css';
import TiltCard from "./components/TiltCard";
import Cursor from './components/Cursor';
import Header from './components/Header';
const App = () => {
  return (
    <>
      {+window.innerWidth > 800 ? <><Cursor /><TiltCard /></> : null}
      <Header />
    </>
  )
}

export default App;