import React, { useState, useEffect } from "react";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("useEffect: call api");
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 0);
    }).then((value) => {
      console.log("useEffect: set state");
      setShow(value);
    });
  }, []);

  return <div className="App">{show && <h1>Hello World</h1>}</div>;
}

export default App;
