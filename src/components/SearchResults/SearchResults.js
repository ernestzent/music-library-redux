import React from 'react';
import Song from '../Song/Song';
import { DetailsLink, ResultsContainer, ResultsTitle, SearchItem, SongList } from './styles';
import { useDispatch } from 'react-redux';
import { addSong } from '../../redux/libraryActions';

const SearchResults = ({ songs }) => {
    const dispatch = useDispatch();

    return (
        <ResultsContainer>
            <ResultsTitle>Resultados de Búsqueda</ResultsTitle>
            <SongList>
                {songs.map((song) => {
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