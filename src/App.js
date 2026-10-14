import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import GlobalStyles from './theme/GlobalStyles';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Library from './components/Library/Library';
import SongDetail from './components/SongDetail/SongDetail';
import { AppContainer, MainContent, SearchSection } from './AppStyles';

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={Theme}>
                <GlobalStyles />
                <AppContainer>
                    <Header appName="Librería Musical" />
                    
                    <Routes>
                        <Route path="/" element={
                            <MainContent>
                                <SearchSection>
                                    <SearchBar />
                                    <SearchResults />
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