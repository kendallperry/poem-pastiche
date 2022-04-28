import axios from "axios";

const ADD_LINE = "ADD_LINE";

const _addLine = (line) => {
  return {
    type: ADD_LINE,
    line,
  };
};

export const addLine = (line) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("api/line", line);
      dispatch(_addLine(data));
    } catch (err) {
      console.log("there was an error adding a line!".err);
    }
  };
};

export default function lineReducer(state = [], action) {
  switch (action.type) {
    case ADD_LINE:
      return [...state, action.line];
    default:
      return state;
  }
}
