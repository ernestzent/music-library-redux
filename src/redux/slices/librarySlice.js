import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
    name: 'library',
    initialState: [],
    reducers: {
        addSong: (state, action) => {
            const exists = state.find(song => song.id === action.payload.id);
            if (!exists) {
                state.push(action.payload);
            } else {
                alert("¡Esta canción ya está en tu biblioteca!");
            }
        },
        removeSong: (state, action) => {
            return state.filter(song => song.id !== action.payload);
        }
    }
});

export const { addSong, removeSong } = librarySlice.actions;
const { reducer: libraryReducer } = librarySlice;
export default libraryReducer;