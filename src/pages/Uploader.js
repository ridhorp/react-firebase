import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../services/firebase'
import { useState } from "react";

function Uploader() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  };
  const handleUpload = async (e) => {
    e.preventDefault()
    try {
      await uploadBytes(ref(storage, `files/${file.name}`), file)
      alert('upload successfully')
      setFile('')
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>Random Uploader</h4>
        <form onSubmit={handleUpload}>
          <input type="file" placeholder="File" value={file} onChange={handleFileChange} />
          <input type="submit" value="submit" />
        </form>
      </header>
    </div>
  );
}

export default Uploader;
