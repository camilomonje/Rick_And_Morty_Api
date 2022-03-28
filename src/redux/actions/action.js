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

export const addFavorite = (item) => ({
  type: "ADD_TO_FAVORITES",
  payload: item,
});

export const removeFavorite = (id) => ({
  type: "REMOVE_TO_FAVORITES",
  payload: id
})
