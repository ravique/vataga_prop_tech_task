import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Hello world</div>;
}

export default App;
