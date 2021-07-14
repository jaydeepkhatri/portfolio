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
                <div className="cursor" ></div>
            </>
        )
    }

}

// export default Cursor;