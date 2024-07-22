const API_URL = 'http://localhost:8000';

export async function parseNetwork(file) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_URL}/parse`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.visualization;
}

export async function generateCode(structure) {
  const response = await fetch(`${API_URL}/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(structure),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.generated_code;
}
