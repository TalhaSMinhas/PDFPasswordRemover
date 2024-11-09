import "./HeaderLogo.css";
import logo from "../../logo.svg";

export default function HeaderLogo() {
    return (
        <div className="container">
            <div>
                <img src={logo} className="logo" alt="logo"/>
            </div>
            <div>
                <h1 className="header-text">
                    PDF Password Remover
                </h1>
            </div>
        </div>
    )
}