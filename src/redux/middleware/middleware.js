import { getCharactersSuccess } from "../actions/action";

const getCharactersFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === "GET_CHARACTERS") {
      try {
        const response = await api.loadCharacters();
        dispatch(getCharactersSuccess(response));
      } catch (error) {}
    }
  };

  const middleware = [getCharactersFlow];
  export default middleware;
