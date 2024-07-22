import React, { useState } from "react";
import CodeUploader from "../components/CodeUploader.jsx";
import NetworkVisualizer from "../components/NetworkVisualizer.jsx";
import CodeGenerator from "../components/CodeGenerator.jsx";

function Home() {
  const [networkStructure, setNetworkStructure] = useState(null);

  return (
    <div className="Home">
      <h1>Morpheus</h1>
      <CodeUploader setNetworkStructure={setNetworkStructure} />
      {networkStructure && (
        <>
          <NetworkVisualizer structure={networkStructure} />
          <CodeGenerator structure={networkStructure} />
        </>
      )}
    </div>
  );
}

export default Home;
