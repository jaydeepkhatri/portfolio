import { useEffect, useState, useRef } from 'react';
import './Cursor.scss';

function Cursor() {
  const [showMouse, setShowMouse] = useState(false);
  const mouseRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setShowMouse(true);
    }

    window.addEventListener('mousemove', (e) => {
      if (showMouse) {
        mouseRef.current.style.top = `${e.pageY}px`;
        mouseRef.current.style.left = `${e.pageX}px`;
      }
    });
  });

  return (
    showMouse ? <div className="cursor" ref={mouseRef}></div> : null
  );
}

export default Cursor;
