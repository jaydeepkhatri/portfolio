import { useEffect } from "react";
import {FaChevronUp} from "react-icons/fa";

const ScrollDown = () => {
    useEffect(() => {
        const btn = document.querySelector(".scrolldown");
        window.onscroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                btn.style.opacity = "1";
                btn.style.pointerEvents = "all";
            } else {
                btn.style.opacity = 0;
                btn.style.pointerEvents = "none";
            }
        }
    }, []);

    const handleClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return(
        <div className="scrolldown" onClick={() => handleClick()}><FaChevronUp /></div>
    )
}

export default ScrollDown;


// export default class ScrollDown extends Component {
//     componentDidMount() {
//         const btn = document.querySelector(".scrolldown");
//         window.onscroll = () => {
//             if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//                 btn.style.opacity = "1";
//                 btn.style.pointerEvents = "all";
//             } else {
//                 btn.style.opacity = 0;
//                 btn.style.pointerEvents = "none";
//             }
//         }
//     }

//     handleClick = () => {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//     }

//     render() {
//         return (
//             <div className="scrolldown" onClick={this.handleClick}><FontAwesomeIcon icon={faChevronUp} /></div>
//         )
//     }
// }