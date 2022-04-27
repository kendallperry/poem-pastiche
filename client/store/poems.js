import axios from "axios";

const SET_POEMS = "SET_POEMS";

const setAllPoems = (poems) => {
  return {
    type: SET_POEMS,
    poems,
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

export default (state = [], action) => {
    switch (action.type) {
        case SET_POEMS:
          return action.poems;
        default: 
          return state; 
    }
}
