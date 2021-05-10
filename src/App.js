import "./App.css";
const App = () => {
  return (
    <div className="root">
      <div className="main">
        <h1>Increament Decreament</h1>
        <div className="main_operations">
          <button className="minus_button">-</button>
          <div className="value">0</div>
          <button className="add_button">+</button>
        </div>
      </div>
    </div>
  );
};

export default App;
