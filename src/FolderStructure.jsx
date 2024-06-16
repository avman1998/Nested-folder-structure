import React, { useState } from "react";
// 📁 📂
const FolderStructure = ({ structure }) => {
  const [expand, setExpand] = useState({});
  function expandFolder(structure) {
    setExpand((prev) => {
      return {
        ...prev,
        [structure?.name]: !prev[structure?.name],
      };
    });
  }
  if (structure?.type === "folder") {
    return (
      <>
        <p onClick={() => expandFolder(structure)}>
          {expand[structure?.name] ? "📂" : "📁"} {structure?.name}
        </p>
        {expand[structure?.name] &&
          structure?.children &&
          structure?.children?.map((item) => {
            return (
              <div
                style={{
                  paddingLeft: "30px",
                }}
              >
                {" "}
                <FolderStructure structure={item} />
              </div>
            );
          })}
      </>
    );
  } else {
    return (
      <div>
        <p>{structure?.name}</p>
      </div>
    );
  }
};

export default FolderStructure;
