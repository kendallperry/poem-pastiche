import axios from "axios";

const SET_POEMS = "SET_POEMS";
const ADD_POEM = "ADD_POEM";

const setAllPoems = (poems) => {
  return {
    type: SET_POEMS,
    poems,
  };
};

const _addPoem = (poem) => {
  return {
    type: ADD_POEM,
    poem,
  };
};

export const fetchPoems = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/poems");
      dispatch(setAllPoems(data));
    } catch (err) {
      console.log("There was an error fetching all poems", err);
    }
  };
};

export const addPoem = (poem, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/poems", poem);
      dispatch(_addPoem(data));
      history.push("/poems");
    } catch (err) {
      console.log("There was an error adding a poem", err);
    }
  };
};

export default function poemReducer(state = [], action) {
  switch (action.type) {
    case SET_POEMS:
      return action.poems;
    case ADD_POEM:
      return [...state, action.poem];
    default:
      return state;
  }
}
