import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import GlobalStyles from './theme/GlobalStyles';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Library from './components/Library/Library';
import SongDetail from './components/SongDetail/SongDetail';
import useFetch from './hooks/useFetch';
import { AppContainer, MainContent, SearchSection } from './AppStyles';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const apiUrl = searchTerm ? `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${searchTerm}` : null;
    const { data, loading, error, refetch } = useFetch(apiUrl);

    const formattedResults = data?.album ? data.album.map(item => ({
        id: item.idAlbum,
        title: item.strAlbum,
        artist: item.strArtist,
        duration: item.intYearReleased
    })) : [];

    return (
        <BrowserRouter>
            <ThemeProvider theme={Theme}>
            <GlobalStyles />
            
            <AppContainer>
                <Header appName="BeatVault" />
                
                <Routes>
                    <Route path="/" element={
                        <MainContent>
                            <SearchSection>
                                <SearchBar onSearch={setSearchTerm} />
                                {loading && <p>Cargando...</p>}
                                {error && (
                                    <div>
                                        <p>Hubo un problema al cargar los datos.</p>
                                        <button onClick={refetch}>Reintentar</button>
                                    </div>
                                )}
                                {!loading && !error && (
                                    <SearchResults songs={formattedResults} />
                                )}
                            </SearchSection>
                            
                            <Library />
                        </MainContent>
                    } />
                    <Route path="/song/:id" element={<SongDetail />} />
                </Routes>
            </AppContainer>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;