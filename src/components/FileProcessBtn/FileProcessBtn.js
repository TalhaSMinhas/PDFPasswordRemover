import "./FileProcessBtn.css";

export default function FileProcessBtn() {
    function handleClick(e) {
        alert("The bluetooth device has been connected successfully");
    }
    
    return (
        <button className="button" onClick={handleClick}>
            Unlock
        </button>
    );
}