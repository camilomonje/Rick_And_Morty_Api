import axios from "axios"

const functions = {

    loadCharacters: async () => {
        const response =  await axios.get("https://rickandmortyapi.com/api/character");
        return response.data
    }
}

export default functions;