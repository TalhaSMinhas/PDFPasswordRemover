import './App.css';
import HeaderLogo from "./components/Header/HeaderLogo";
import FileProcessBtn from "./components/FileProcessBtn/FileProcessBtn";

function App() {

    return (
        <div className="App">
            <div>
                <HeaderLogo/>
                <FileProcessBtn/>
            </div>
        </div>
    );
}

export default App;
