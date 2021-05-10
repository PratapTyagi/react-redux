export const increament = (num) => {
  return {
    type: "INCREAMENT",
    payload: num,
  };
};

export const decreament = (num) => {
  return {
    type: "DECREAMENT",
    payload: num,
  };
};
