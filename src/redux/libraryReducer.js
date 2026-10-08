import { ADD_SONG, REMOVE_SONG } from "./libraryActions";

const initialState = [];

const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            const exists = state.find(song => song.id === action.payload.id);
            if (exists) {
                alert("¡Esta canción ya está en tu biblioteca!");
                return state;
            }

            return [...state, action.payload];
        case REMOVE_SONG:
            return state.filter(song => song.id !== action.payload);

            default:
                return state;
    }
};

export default libraryReducer;