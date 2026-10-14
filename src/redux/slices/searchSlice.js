import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSongs = createAsyncThunk('search/fetchSongs', async (searchTerm) => {
    console.log("1. Buscando el artista:", searchTerm);
        
    const url = `/api/v1/json/123/searchalbum.php?s=${searchTerm}`;
    
    const response = await axios.get(url);
    
    const data = response.data; 
    console.log("3. Respuesta cruda de la API:", data);

    if (!data.album) {
        console.log("4. La API no encontró álbumes para este artista.");
        return []; 
    }
        
    const formattedData = data.album.map(item => ({
        id: item.idAlbum,
        title: item.strAlbum,
        artist: item.strArtist,
        duration: item.intYearReleased
    }));
        
    console.log("5. Datos formateados listos para Redux:", formattedData);
    return formattedData;
});

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        results: [],
        loading: false,
        error: null
    },
    reducers: {
        resetResults: (state) => {
            state.results = [];
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSongs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSongs.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload;
            })
            .addCase(fetchSongs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { resetResults } = searchSlice.actions;
const { reducer: searchReducer } = searchSlice;
export default searchReducer;