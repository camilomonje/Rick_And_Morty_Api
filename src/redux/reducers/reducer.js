const initialState = {
    charactersData: {
        info: {},
        results: []
    },
    selectedCharacter: {},
    loading: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_CHARACTERS":
        return { ...state, loading: true };
  
      case "GET_CHARACTERS_SUCCESS":
        return { ...state, charactersData: action.payload, loading: false };

        case "SELECT_CHARACTER":
          return {...state, selectedCharacter: action.payload}
  
      default:
        return state;
    }
  };
  
  export default reducer;