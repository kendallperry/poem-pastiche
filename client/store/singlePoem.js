import axios from "axios";

const SINGLE_POEM = "SINGLE_POEM";

const getSinglePoem = (poem) => ({
  type: SINGLE_POEM,
  poem,
});

export const fetchSinglePoem = (poemId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`api/poems/${poemId}`);
      dispatch(getSinglePoem(data));
    } catch (err) {
      console.log("There was a problem fetching a single product!", err);
    }
  };
};

export default function singlePoemReducer(state = {}, action) {
  switch (action.type) {
    case SINGLE_POEM:
      return action.poem;
    default:
      return state;
  }
}
