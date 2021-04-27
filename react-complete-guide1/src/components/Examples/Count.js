import React from "react";

const Count = (props) => {
  console.log(`Count of ${props.title}`);

  return (
    <>
      <div>{props.title}</div>
      <div>{props.value}</div>
    </>
  );
};

export default React.memo(Count);
