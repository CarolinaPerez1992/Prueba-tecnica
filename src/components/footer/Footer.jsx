import React, { PureComponent } from "react";
import "./footer.css";
import face from "../../assets/social/facebook-white.svg";
import x from "../../assets/social/twitter-white.svg";
import insta from "../../assets/social/instagram-white.svg";
import app from "../../assets/store/app-store.svg";
import play from "../../assets/store/play-store.svg";
import windows from "../../assets/store/windows-store.svg";

export default class PieDePagina extends PureComponent {
    render() {
        return (
        <div className="footer">
            <nav>
                <ul className="nav">
                    <li>Home</li>
                    <li>Teams and Conditios </li>
                    <li>Privacy</li>
                    <li> Policy</li>
                    <li>Help</li>
                    <li>Manage Account</li>
                </ul>
            </nav>
            <div>Copyright © 2016 DEMO Streaming All Rights Reserved.
            </div>
            <div className="redes">
                <div className="social">
                    <img className="" width="14" src={face} alt="Facebook" />
                    <img className="" width="20" src={x} alt="Twitter" />
                    <img className="" width="20" src={insta} alt="Instagram" />
                </div>
                <div className="store">
                    <img className="" width="80" src={app} alt="App Store" />
                    <img className="" width="80" src={play} alt="Play Store" />
                    <img className="" width="80" src={windows} alt="Windows Store" />
                </div>
            </div>
        </div>
        );
    }
}
