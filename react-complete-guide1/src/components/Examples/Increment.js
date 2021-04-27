import React from "react";

const Increment = (props) => {
  console.log("Increment " + props.name);
  return (
    <div>
      <button onClick={props.func}>Increment</button>
    </div>
  );
};

export default React.memo(Increment);
