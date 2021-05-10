const increamentDecreament = (state = 0, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return state + action.payload;
    case "DECREAMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default increamentDecreament;
