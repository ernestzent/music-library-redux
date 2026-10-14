import React from 'react';
import Song from '../Song/Song';
import { DetailsLink, ResultsContainer, ResultsTitle, SearchItem, SongList } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '../../redux/slices/librarySlice';


const SearchResults = () => {
    const { results, loading, error } = useSelector(state => state.search);
    const dispatch = useDispatch();

    if (loading) return <p style={{color: '#1db954', textAlign: 'center'}}>Cargando resultados...</p>;

    if (error) return (
        <div style={{color: '#ff4d4d', textAlign: 'center', backgroundColor: 'rgba(255, 77, 77, 0.1)', padding: '20px', borderRadius: '8px'}}>
            <p>Hubo un problema: {error}</p>
        </div>
    );

    if (results.length === 0) return null;

    return (
        <ResultsContainer>
            <ResultsTitle>Resultados de Búsqueda</ResultsTitle>
            <SongList>
                {results.map((song) => {
                    const { id, title, artist, duration } = song;
                    return (
                        <SearchItem key={id}>
                            <Song
                                title={title}
                                artist={artist}
                                duration={duration}
                                onAdd={() => dispatch(addSong(song))}
                            />
                            
                            <DetailsLink to={`/song/${id}`}>
                                Ver detalles del álbum
                            </DetailsLink>
                        </SearchItem>
                    )
                })}
            </SongList>
        </ResultsContainer>
    )
}

export default SearchResults;