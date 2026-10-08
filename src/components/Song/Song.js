import React from 'react';
import { Actions, AddButton, Artist, Card, Details, Info, RemoveButton, Title, TitleLink } from './styles';

const Song = ({ id, title, artist, duration, onAdd, onRemove }) => {
    return (
        <Card>
            <Info>
                {id ? (
                    <TitleLink to={`/song/${id}`}>
                        <Title>{title}</Title>
                    </TitleLink>
                ) : (
                    <Title>{title}</Title>
                )}
                <Artist>{artist}</Artist>
            </Info>
            
            <Actions>
                <Details>{duration}</Details>
                {onAdd && (
                    <AddButton primary onClick={onAdd}>
                        Agregar a mi biblioteca
                    </AddButton>
                )}

                {onRemove && (
                    <RemoveButton onClick={onRemove}>
                        Eliminar
                    </RemoveButton>
                )}
            </Actions>
        </Card>
    );
};

export default Song;