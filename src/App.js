import './App.css';

function App() {
  function handleClick(e) {
    alert("the button has been clicked!");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          PDF Password Remover
        </h1>
        <button onClick={handleClick}>
          Press to Unlock
        </button>
      </header>
    </div>
  );
}

export default App;
