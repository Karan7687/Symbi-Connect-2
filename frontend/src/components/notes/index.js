import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function Notes() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);
  };

  return (
    <div className="container">
      <div className="notes">
        <form className="formStyle" onSubmit={submitImage}>
          <h4>Upload Notes</h4>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            type="file"
            className="form-control"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Notes;
