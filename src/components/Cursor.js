import { Component } from "react";



export default class Cursor extends Component {
    componentDidMount() {
        const mouseCursor = document.querySelector('.cursor');
        document.addEventListener('mousemove', (e) => {
            mouseCursor.style.top = e.pageY + 'px';
            mouseCursor.style.left = e.pageX + 'px';
        });
    }
    render() {
        return (
            <>
                {window.innerWidth > 768 ? <div className="cursor" ></div> : null}
            </>
        )
    }

}

// export default Cursor;