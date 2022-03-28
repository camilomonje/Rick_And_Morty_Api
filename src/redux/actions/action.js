export const getCharacters = () => ({
  type: "GET_CHARACTERS",
});

export const getCharactersSuccess = (response) => ({
  type: "GET_CHARACTERS_SUCCESS",
  payload: response,
});

export const selectCharacter = (item) => ({
  type: "SELECT_CHARACTER",
  payload: item,
});
