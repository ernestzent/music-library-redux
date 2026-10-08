import React from 'react';
import Song from '../Song/Song';
import { EmptyMessage, LibraryContainer, SongList, Title } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { removeSong } from '../../redux/libraryActions';

const Library = () => {
    const songs = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <LibraryContainer>
            <Title>Mi Biblioteca</Title>
            {songs.length === 0 ? (
                <EmptyMessage>Tu biblioteca está vacía.</EmptyMessage>
            ) : (
                <SongList>
                    {songs.map((song) => {
                        const { id, title, artist, duration } = song;
                        return (
                            <Song
                                key={id}
                                title={title}
                                artist={artist}
                                duration={duration}
                                onRemove={() => dispatch(removeSong(id))}
                            />
                        )
                    })}
                </SongList>
            )}
        </LibraryContainer>
    )
}

export default Library;