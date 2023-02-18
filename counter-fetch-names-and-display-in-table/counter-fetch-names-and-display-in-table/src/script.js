/**
  Challenge: Pressing `Increment` button should increase the counter count by one. Pressing `Decrement` button should decrease the counter count by one.
  
  Solution: https://codepen.io/angelo_jin/pen/yLzKMXX
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
const App = () => {
  const [counter, setCounter] = React.useState(0);

  const addCounter = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    } else {
      setCounter(counter);
    }
  };

  const reduceCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  const [names, setNames] = React.useState([]);
  //we use useeffect to perform side effect. It takes 2 arguments a function and array to determine how many time to perform side effect
  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      //res.json will convert json file to JS object
      .then((res) => res.json())
      //data.results is an array of 3 objects
      .then((data) =>
        setNames(
          data.results.map((result) => ({
            firstname: result.name.first,
            lastname: result.name.last
          }))
        )
      );
  }, []);

  return (
    <>
      <div>
        <h2>Counter: {counter} </h2>
        <button onClick={addCounter}>Increment</button>
        <button onClick={reduceCounter}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <table>
          {names.map((names, index) => (
            <tr>
              <td>{names.firstname}</td>
              <td>{names.lastname}</td>
              <td></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

/**
  All Exercises and Solutions from the video for your convenience
  https://youtu.be/VzNNjNmbXpY

  Exercises:
  Display simple JSX 
    - https://codepen.io/angelo_jin/pen/wvrygZa
  Display array of users to browser
    - https://codepen.io/angelo_jin/pen/QWqQdXE
  Show/Hide Element on Screen
    - https://codepen.io/angelo_jin/pen/zYERZZL
  2 way data binding in ReactJS
    - https://codepen.io/angelo_jin/pen/MWEQmqN
  Disable a button
    - https://codepen.io/angelo_jin/pen/YzrazGY
  Update the parent state
    - https://codepen.io/angelo_jin/pen/JjrLjOy
  Dynamically add child components (React Children)
    - https://codepen.io/angelo_jin/pen/BawrpeX
  Sum of Two Numbers
    - https://codepen.io/angelo_jin/pen/zYEWZNR
  Create Counter App
    - https://codepen.io/angelo_jin/pen/mdBxWwN
  Fetch data from an API
    - https://codepen.io/angelo_jin/pen/oNGqZpm

  Solutions:
  Display simple JSX 
    - https://codepen.io/angelo_jin/pen/xxXrZLd
  Display array of users to browser
    - https://codepen.io/angelo_jin/pen/wvreMpZ
  Show/Hide Element on Screen
    - https://codepen.io/angelo_jin/pen/abLwyrL
  2 way data binding in ReactJS
    - https://codepen.io/angelo_jin/pen/yLzvMop
  Disable a button
    - https://codepen.io/angelo_jin/pen/dyVmyYz
  Update the parent state
    - https://codepen.io/angelo_jin/pen/KKXoKgO
  Dynamically add child components (React Children)
    - https://codepen.io/angelo_jin/pen/MWEVJNb
  Sum of Two Numbers
    - https://codepen.io/angelo_jin/pen/BawrWzy
  Create Counter App
    - https://codepen.io/angelo_jin/pen/yLzKMXX
  Fetch data from an API
    - https://codepen.io/angelo_jin/pen/zYEWZdW
**/
