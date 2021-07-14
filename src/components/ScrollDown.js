import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default class ScrollDown extends Component {
    componentDidMount() {
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
    }

    handleClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        return (
            <div className="scrolldown" onClick={this.handleClick}><FontAwesomeIcon icon={faChevronUp} /></div>
        )
    }
}