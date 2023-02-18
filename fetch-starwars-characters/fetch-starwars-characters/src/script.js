function App() {
  const [data, setData] = React.useState([]);
  const [showData, setShowData] = React.useState(false);

  React.useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) =>
        setData(
          data.results.map((result) => ({
            id: result.url.match(/\/([0-9]*)\/$/)[1],
            name: result.name,
            species: result.species[0],
            image: `https://starwars-visualguide.com/assets/img/characters/${
              result.url.match(/\/([0-9]*)\/$/)[1]
            }.jpg`
          }))
        )
      );
  }, []);

  const handleButtonClick = () => {
    setShowData(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>show character</button>
      {showData &&
        data.map((result) => (
          <div key={result.id}>
            <img src={result.image} alt={result.name} />
            <h2>{result.name}</h2>
            <p>Species: {result.species}</p>
          </div>
        ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
