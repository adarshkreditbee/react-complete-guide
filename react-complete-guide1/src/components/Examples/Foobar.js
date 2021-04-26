import { useEffect, useRef } from "react";

const Foobar = () => {
  const datalistRef = useRef(null);
  const helloRef = useRef(null);
  let counter = 1;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");
    console.log(datalistRef.current.value);
  };

  const headerTextHandler = () => {
    counter++;
    helloRef.current.innerText = `Hello world ${counter}!!`;
  };

  useEffect(() => {
    console.log(datalistRef.current.value);
    helloRef.current.addEventListener("click", headerTextHandler);
  }, []);

  return (
    <>
      <div>Foobar</div>
      <form onSubmit={submitHandler}>
        <input list="browsers" ref={datalistRef} />
        <datalist id="browsers">
          <option value="Edge" />
          <option value="Firefox" />
          <option value="Chrome" />
        </datalist>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1 ref={helloRef}>Hello World</h1>
      </div>
    </>
  );
};

export default Foobar;
