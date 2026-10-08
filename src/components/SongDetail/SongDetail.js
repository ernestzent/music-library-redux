import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Artist, BackButton, Card, Container, Description, ErrorContainer, Image, Info, LoadingText, RetryButton, Text, Title } from "./styles";

const SongDetail = () => {
    const { id } = useParams();
    const { data, loading, error, refetch } = useFetch(`https://www.theaudiodb.com/api/v1/json/123/album.php?m=${id}`);

    if (loading) return <LoadingText>Cargando detalles...</LoadingText>;

    if (error) return (
        <ErrorContainer>
            <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
            <RetryButton onClick={refetch}>Reintentar</RetryButton>
        </ErrorContainer>
    );

    if (!data || !data.album) return <p>No se encontraron detalles.</p>;

    const albumDetails = data.album[0];

    return (
        <Container>
            <BackButton to="/">← Volver a inicio</BackButton>

            <Card>
                {albumDetails.strAlbumThumb && (
                    <Image src={albumDetails.strAlbumThumb} alt="Portada del álbum"/>
                )}
                
                <Info>
                    <Title>{albumDetails.strAlbum}</Title>
                    <Artist>{albumDetails.strArtist}</Artist>
                    <Text><strong>Año de lanzamiento:</strong> {albumDetails.intYearReleased}</Text>
                    <Text><strong>Género:</strong> {albumDetails.strStyle || albumDetails.strGenre}</Text>
                    <Description>{albumDetails.strDescriptionES || albumDetails.strDescriptionEN}</Description>
                </Info>
            </Card>
        </Container>
    );
};

export default SongDetail;