import React, { useState, useEffect } from 'react';

// Helper function to flatten nested objects
const flattenObject = (obj, prefix = '') => {
  let result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      // Handle nested objects
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (Array.isArray(obj[key])) {
          // If it's an array, join its elements into a comma-delimited string
          result[newKey] = obj[key].join(', ');
        } else {
          // If it's an object, recurse to flatten it
          Object.assign(result, flattenObject(obj[key], newKey));
        }
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
};

const JSONToTable = () => {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch the JSON data when the component mounts
  useEffect(() => {
    fetch('/sb-alg-list.json') // Path to the JSON file in the static folder
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch the JSON file');
        }
        return response.json();
      })
      .then((data) => {
        setJsonData(data);
        setError(null); // Clear any previous errors
      })
      .catch((err) => {
        setError(err.message);
        setJsonData(null); // Reset data in case of error
      });
  }, []);

  // Function to generate table headers dynamically
  const generateTableHeaders = (data) => {
    if (data && Array.isArray(data)) {
      const flattenedData = data.map((item) => flattenObject(item));
      const keys = Array.from(new Set(flattenedData.flatMap(Object.keys)));
      return keys.map((key) => <th key={key}>{key}</th>);
    }
    return [];
  };

  // Function to generate table rows dynamically
  const generateTableRows = (data) => {
    console.log(data);
    if (data && Array.isArray(data)) {
      const flattenedData = data.map((item) => flattenObject(item));
      return flattenedData.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {Object.values(row).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      ));
    }
    return [];
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {jsonData && Array.isArray(jsonData) && (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>{generateTableHeaders(jsonData)}</tr>
          </thead>
          <tbody>{generateTableRows(jsonData)}</tbody>
        </table>
      )}

      {jsonData && !Array.isArray(jsonData) && (
        <p>No data found in the JSON. Expected an array of objects.</p>
      )}
    </div>
  );
};

export default JSONToTable;
