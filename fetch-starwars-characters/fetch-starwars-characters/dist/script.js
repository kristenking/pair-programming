function App() {
  const [data, setData] = React.useState([]);
  const [showData, setShowData] = React.useState(false);

  React.useEffect(() => {
    fetch("https://swapi.dev/api/people").
    then(res => res.json()).
    then((data) =>
    setData(
    data.results.map(result => ({
      id: result.url.match(/\/([0-9]*)\/$/)[1],
      name: result.name,
      species: result.species[0],
      image: `https://starwars-visualguide.com/assets/img/characters/${
      result.url.match(/\/([0-9]*)\/$/)[1]
      }.jpg` }))));



  }, []);

  const handleButtonClick = () => {
    setShowData(true);
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("button", { onClick: handleButtonClick }, "show character"),
    showData &&
    data.map((result) => /*#__PURE__*/
    React.createElement("div", { key: result.id }, /*#__PURE__*/
    React.createElement("img", { src: result.image, alt: result.name }), /*#__PURE__*/
    React.createElement("h2", null, result.name), /*#__PURE__*/
    React.createElement("p", null, "Species: ", result.species)))));




}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));