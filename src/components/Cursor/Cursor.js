import { useEffect, useState } from "react";
const Cursor = () => {
    const [showMouse, setShowMouse] = useState(true);

    useEffect(() => {
        const mouseCursor = document.querySelector('.cursor');
        window.addEventListener('mousemove', (e) => {
            mouseCursor.style.top = e.pageY + 'px';
            mouseCursor.style.left = e.pageX + 'px';
        });

        window.addEventListener('resize', () => {
            console.log(window.innerWidth);
            if(window.innerWidth <= 768) {
                setShowMouse(false);
            } else {
                setShowMouse(true);
            }
        })
    }, [])

    return (
        <>
            {showMouse ? <div className="cursor" ></div> : null}
        </>
    )
}

export default Cursor;