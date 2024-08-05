import { useState } from "react";
import "./App.css";
import Node from "./Node";

function App() {
  const [files, setFiles] = useState([
    {
      id: 0,
      name: "f-zero",
      type: "folder",
      parent: null,
    },
    {
      id: 1,
      name: "f-one",
      type: "folder",
      parent: 0,
    },
    {
      id: 2,
      name: "two",
      type: "file",
      parent: 1,
    },
    {
      id: 3,
      name: "three",
      type: "file",
      parent: 0,
    },
  ]);

  // first render curr direc files

  // on hover - show actions

  // on click - get all the children, and render them

  return (
    <Node
      id={0}
      type="folder"
      name="f-zero"
      files={files}
      setFiles={setFiles}
    />
  );
}

export default App;
