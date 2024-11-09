import "./HeaderLogo.css";
import logo from "../logo.svg";

export default function HeaderLogo() {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>
                PDF Password Remover
            </h1>
        </div>
    )
}