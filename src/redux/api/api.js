import axios from "axios"

const functions = {

    loadCharacters: async () => {
        const response =  await axios.get("https://rickandmortyapi.com/api/character");
        return response.data
    },

    loadEpisodes: async () => {
        const response = await axios.get("https://rickandmortyapi.com/api/episode");
        return response;
    }
}

export default functions;