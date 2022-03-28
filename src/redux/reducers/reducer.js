const initialState = {
  charactersData: {
    info: {},
    results: [],
  },
  selectedCharacter: {},
  myFavorites: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return { ...state, loading: true };

    case "GET_CHARACTERS_SUCCESS":
      return { ...state, charactersData: action.payload, loading: false };

    case "SELECT_CHARACTER":
      return { ...state, selectedCharacter: action.payload };

    case "ADD_TO_FAVORITES":
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };

    case "REMOVE_TO_FAVORITES":
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default reducer;
