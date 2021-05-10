import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "./actions/increamentDecreament";

import "./App.css";
const App = () => {
  const count = useSelector((state) => state.increamentDecreament);
  const dispatch = useDispatch();
  return (
    <div className="root">
      <div className="main">
        <h1>Increament Decreament</h1>
        <div className="main_operations">
          <button
            className="minus_button"
            onClick={() => dispatch(decreament(1))}
          >
            -
          </button>
          <div className="value">{count}</div>
          <button
            className="add_button"
            onClick={() => dispatch(increament(1))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
