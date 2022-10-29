import "./styles/main.css";
import { Cursor, Header, Me, Projects, Skills, Footer, ScrollDown } from "./components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Dots = () => {
  return (
    <div className="dots">
      <span className="dot active"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  )
}



function App() {
  AOS.init();

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {
      dots[index].addEventListener("click", () => {
        sections[index].scrollIntoView();
      }) 
    })
    
    document.querySelector(".App").addEventListener('scroll', () => {
      sections.forEach((section, index) => {
        let pos = section.getBoundingClientRect();
        if(pos.top >= 0 && pos.bottom <= window.innerHeight) {
          dots[index].classList.add("active");
          console.log("got it - " + index);
        } else {
          dots[index].classList.remove("active");
        }
      })
    })
}, [])
  
  return (
    <div className="App">
      <Cursor />
      <main>
        <Header />
        <Me />
        <Projects />
        <Skills />
        <Footer />
        <Dots />
      </main>
      <ScrollDown />
    </div>
  );
}

export default App;