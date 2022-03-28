const initialState = {
    charactersData: {
        info: {},
        results: []
    },
    selectedCharacter: false,
    loading: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_CHARACTERS":
        return { ...state, loading: true };
  
      case "GET_CHARACTERS_SUCCESS":
        return { ...state, charactersData: action.payload, loading: false };
  
      default:
        return state;
    }
  };
  
  export default reducer;