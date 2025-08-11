// Product Generator for dynamic JS file creation
export const generateProductJS = (products, category) => {
  const fileContent = `// Auto-generated ${category} products file
// Generated on: ${new Date().toISOString()}

const ${category}Products = ${JSON.stringify(products, null, 2)};

export default ${category}Products;
`;

  return fileContent;
};

export const generateNewCollectionsJS = (products) => {
  const fileContent = `// Auto-generated New Collections products file
// Generated on: ${new Date().toISOString()}

const newCollections = ${JSON.stringify(products, null, 2)};

export default newCollections;
`;

  return fileContent;
};

// Function to simulate file download
export const downloadFile = (content, filename) => {
  const blob = new Blob([content], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
