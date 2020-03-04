import React, {useState} from 'react';

function App() {
  const [jsonString, setJsonString] = useState(JSON.stringify({}));

  fetch('https://api.npoint.io/89f1fb9df1143fab92af')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setJsonString(JSON.stringify(data));
      console.log(data);
    });
  return (
    <div>
      {jsonString}
    </div>
  );
}

export default App;
