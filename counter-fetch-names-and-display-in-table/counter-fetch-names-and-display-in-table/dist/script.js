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
    .then(res => res.json())
    //data.results is an array of 3 objects
    .then((data) =>
    setNames(
    data.results.map(result => ({
      firstname: result.name.first,
      lastname: result.name.last }))));



  }, []);

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h2", null, "Counter: ", counter, " "), /*#__PURE__*/
    React.createElement("button", { onClick: addCounter }, "Increment"), /*#__PURE__*/
    React.createElement("button", { onClick: reduceCounter }, "Decrement"), /*#__PURE__*/
    React.createElement("button", { onClick: reset }, "Reset")), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("table", null,
    names.map((names, index) => /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", null, names.firstname), /*#__PURE__*/
    React.createElement("td", null, names.lastname), /*#__PURE__*/
    React.createElement("td", null)))))));






};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));

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