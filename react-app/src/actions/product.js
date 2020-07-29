import api from "./api";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH: "FETCH_ALL",
};

export const fetchAll = () => (dispatch) => {
  // operacije ...
  // get api req
  api.product().fetchAll()
    .then((response) => {
      console.log(response)
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
