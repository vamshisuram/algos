/* eslint-disable react/prop-types */
import { useState } from "react";

function Node({ id, name, type, files, setFiles }) {
  const [expand, setExpand] = useState(false);

  const handleClick = (evt) => {
    if (type === "folder") {
      evt.stopPropagation();
      setExpand(!expand);
    }
  };

  const handleAddFile = (evt) => {
    evt.stopPropagation();
    const name = window.prompt("file name?");
    if (!name) {
      window.alert("name needed");
    } else {
      setFiles([
        ...files,
        {
          id: "123", //
          name: name,
          type: "file",
          parent: id,
        },
      ]);
    }
  };

  const handleAddFolder = (evt) => {
    evt.stopPropagation();
    const name = window.prompt("file name?");
    if (!name) {
      window.alert("name needed");
    } else {
      setFiles([
        ...files,
        {
          id: "123", //
          name: name,
          type: "folder",
          parent: id,
        },
      ]);
    }
  };

  return (
    <>
      {/* type-icon, title, buttons */}
      {/* children nodes */}
      <div className="node">
        <div className="head">
          <div onClick={handleClick}>{name}</div>
          <div className="add-buttons">
            <button onClick={handleAddFile}>+File</button>
            <button onClick={handleAddFolder}>+Folder</button>
          </div>
        </div>
      </div>
      {expand && (
        <div className="children">
          {files
            .filter((f) => f.parent === id)
            .map((f) => (
              <Node
                key={`${id}-${f.id}`}
                id={f.id}
                name={f.name}
                type={f.type}
                files={files}
              />
            ))}
        </div>
      )}
    </>
  );
}

export default Node;
