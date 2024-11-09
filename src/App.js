import './App.css';
import HeaderLogo from "./components/HeaderLogo.js";

function App() {
    function handleClick(e) {
        alert("the button has been clicked!");
    }

    return (
        <div className="App">
            <header className="App-header">
                <HeaderLogo/>
            </header>
            <button onClick={handleClick}>
                Press to Unlock
            </button>
        </div>
    );
}

export default App;
