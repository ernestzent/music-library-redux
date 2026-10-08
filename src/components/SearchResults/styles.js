import { Link } from "react-router-dom";
import styled from "styled-components";


const ResultsContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBg};
    padding: 20px;
    border-radius: 8px;
`;

const ResultsTitle = styled.h2`
    color: ${({ theme }) => theme.colors.textMain};
    margin-top: 0;
    margin-bottom: 20px;
`;

const SongList = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const SearchItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: ${({ theme }) => theme.colors.cardBg};
    padding: 15px 20px;
    border-radius: 6px;
    
    /* Quitamos el fondo y padding de la tarjeta interna <Song> para integrarla mejor */
    & > div {
        padding: 0;
        background-color: transparent;
    }
`;

const DetailsLink = styled(Link)`
    display: inline-block;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.accentHover};
        text-decoration: underline;
    }
`;

export {
    ResultsContainer,
    ResultsTitle,
    SongList,
    SearchItem,
    DetailsLink,
}