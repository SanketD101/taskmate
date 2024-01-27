import { useEffect, useState } from "react";

import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

import "./App.css";

function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("demo")) || []
  );
  const [item, setItem] = useState({});

  useEffect(() => {
    localStorage.setItem("demo", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        item={item}
        setItem={setItem}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        item={item}
        setItem={setItem}
      />
    </div>
  );
}
export default App;
