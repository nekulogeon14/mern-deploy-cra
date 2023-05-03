import { useState } from "react";

import "./App.css";

function App() {
  const [result, setResult] = useState('');

  const fetchInfo = async () => {
    const url = `${process.env.REACT_APP_API_URL}/test`
    const response = await fetch(url)
    const json = await response.json()
    setResult(json)
  };
  return (
    <div>
      <button onClick={() => fetchInfo()}>fetch info from api</button>
      <div>result: {result}</div>
    </div>
  );
}

export default App;
