import "./FileProcessBtn.css";
import {PDFDocument} from 'pdf-lib';
import {useState} from "react";

export default function FileProcessB() {
    const [pdfFile, setPdfFile] = useState({});
    const [filePassword, setFilePassword] = useState({});

    async function removePassword(pdfFile, userPassword) {
        try {
            // Read the protected PDF file as an ArrayBuffer
            const fileData = await pdfFile.arrayBuffer();

            // Load the encrypted PDF document with the user password
            const pdfDoc = await PDFDocument.load(fileData, {password: userPassword});

            // Save the PDF without any password protection
            const pdfBytes = await pdfDoc.save();

            // Create a Blob from the unprotected PDF bytes and generate a download link
            const blob = new Blob([pdfBytes], {type: 'application/pdf'});
            const url = URL.createObjectURL(blob);

            // Create a link to download the unprotected PDF
            const link = document.createElement('a');
            link.href = url;
            link.download = 'unprotected.pdf';
            link.click();

            // Revoke the object URL after download
            URL.revokeObjectURL(url);

            console.log('Password removed successfully!');
        } catch (error) {
            console.error('Error removing password:', error);
        }
    }

    function tempProcess(e) {
        if (pdfFile !== null) {
            console.log("PDF file is there");
        }
        if (filePassword !== null) {
            console.log("PDF pass is the here!");
        }
    }

    function handleFileInput(e) {
        setPdfFile(e);
    }

    function handlePasswordChange(e) {
        setFilePassword(e);
    }

    return (
        <div className="file-processing-container">
            <div className='file-input-container'>
                <input className="file-input" type="file" onChange={handleFileInput}/>
            </div>
            <div className='file-password-container'>
                <input className="file-input" type="password" onChange={handlePasswordChange}/>
            </div>
            <button className="button" onClick={tempProcess}>
                Unlock
            </button>
        </div>
    );
}