import React from "react";
import { parseNetwork } from "../utils/api";

function CodeUploader({ setNetworkStructure }) {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    try {
      const structure = await parseNetwork(file);
      setNetworkStructure(structure);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="CodeUploader">
      <h2>Upload Neural Network Code</h2>
      <input type="file" onChange={handleFileUpload} accept=".py" />
    </div>
  );
}

export default CodeUploader;
