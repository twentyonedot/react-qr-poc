import React, { useState, createRef } from 'react'
import QrReader from 'react-qr-reader'
import  Html5QrcodeScannerPlugin  from './Html5QrcodeScannerPlugin';

function App() {
  /* states */
  const [result, setResult] = useState("No result")
  const ref = createRef()
  /* handlers */
  const handleScan = data => {
    console.log("data", data)
    if (data) {
      setResult(data)
    }
  }
  const handleError = err => {
    console.error(err)
  }
  const openImageDialog = () => {
    ref.current.openImageDialog();
  }

  return (
    <div className="App">
      <h1>Html5Qrcode React example!</h1>
      <Html5QrcodeScannerPlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={ handleScan }
        qrCodeErrorCallback={ console.error }
        />
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
