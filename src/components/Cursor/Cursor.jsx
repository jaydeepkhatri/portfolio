import { useEffect, useState, useRef } from 'react';
import './Cursor.scss';

function Cursor() {
  const [showMouse, setShowMouse] = useState(true);
  const mouseRef = useRef(null);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      mouseRef.current.style.top = `${e.pageY}px`;
      mouseRef.current.style.left = `${e.pageX}px`;
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        setShowMouse(false);
      } else {
        setShowMouse(true);
      }
    });
  }, []);

  return (
    showMouse ? <div className="cursor" ref={mouseRef}></div> : null
  );
}

export default Cursor;
