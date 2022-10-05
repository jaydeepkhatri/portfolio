import { useEffect } from "react";
const Cursor = () => {
    useEffect(() => {
        const mouseCursor = document.querySelector('.cursor');
        document.addEventListener('mousemove', (e) => {
            mouseCursor.style.top = e.pageY + 'px';
            mouseCursor.style.left = e.pageX + 'px';
        });
    }, [])

    return (
        <>
            {window.innerWidth > 768 ? <div className="cursor" ></div> : null}
        </>
    )
}

export default Cursor;