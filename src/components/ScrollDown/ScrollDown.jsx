import { useEffect, useRef } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import './ScrollDown.scss';

function ScrollDown() {
  const scrollRef = useRef(null);

  useEffect(() => {
    document.onscroll = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 150) {
        scrollRef.current.style.opacity = '1';
        scrollRef.current.style.pointerEvents = 'all';
      } else {
        scrollRef.current.style.opacity = 0;
        scrollRef.current.style.pointerEvents = 'none';
      }
    };
  }, []);

  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="scrolldown" ref={scrollRef} aria-hidden="true" onClick={() => handleClick()}><FaChevronUp /></div>
  );
}

export default ScrollDown;
