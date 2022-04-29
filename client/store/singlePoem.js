import axios from "axios";

const GET_SINGLE_POEM = "GET_SINGLE_POEM";

const getSinglePoem = (poem) => ({
  type: GET_SINGLE_POEM,
  poem,
});

export const fetchSinglePoem = (poemId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`api/poems/${poemId}`);
      console.log("in poem thunk")
      dispatch(getSinglePoem(data));
    } catch (err) {
      console.log("There was a problem fetching a single product!", err);
    }
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_POEM:
      return action.poem;
    default:
      return state;
  }
};
