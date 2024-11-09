import './App.css';
import HeaderLogo from "./components/Header/HeaderLogo";
import FileProcessBtn from "./components/FileProcessing/FileProcessBtn";

function App() {

    return (
        <div className="App">
            <div className='container'>
                <HeaderLogo/>
                <FileProcessBtn/>
            </div>
        </div>
    );
}

export default App;
