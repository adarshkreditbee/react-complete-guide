import { useCallback, useEffect, useRef, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Increment from "./Increment";

const Foobar = () => {
  const datalistRef = useRef(null);
  const helloRef = useRef(null);
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(10000);
  let counter = 1;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");
    console.log(datalistRef.current.value);
  };

  const headerTextHandler = useCallback(() => {
    counter++;
    helloRef.current.innerText = `Hello world ${counter}!!`;
  }, [counter]);

  const incrementAgeHandler = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalaryHandler = useCallback(() => {
    setSalary(salary + 100);
  }, [salary]);

  useEffect(() => {
    // console.log(datalistRef.current.value);
    helloRef.current.addEventListener("click", headerTextHandler);
  }, [headerTextHandler]);

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
        <Title />
        <Count title="Age" value={age} />
        <Increment name="Age" func={incrementAgeHandler} />
        <Count title="Salary" value={salary} />
        <Increment name="Salary" func={incrementSalaryHandler} />
      </div>
    </>
  );
};

export default Foobar;
