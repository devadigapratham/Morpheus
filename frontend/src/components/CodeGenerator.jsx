import React, { useState } from 'react';
import { generateCode } from '../utils/api';

function CodeGenerator({ structure }) {
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerateCode = async () => {
    try {
      const code = await generateCode(structure);
      setGeneratedCode(code);
    } catch (error) {
      console.error('Error generating code:', error);
    }
  };

  return (
    <div className="CodeGenerator">
      <h2>Generate Code</h2>
      <button onClick={handleGenerateCode}>Generate Code</button>
      {generatedCode && (
        <pre>
          <code>{generatedCode}</code>
        </pre>
      )}
    </div>
  );
}

export default CodeGenerator;
