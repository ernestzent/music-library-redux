import styled from "styled-components";

const LibraryContainer = styled.div`
    background-color: #122a1b; /* Tono verde oscuro característico */
    padding: 20px;
    border-radius: 8px;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex: 1;
        max-width: 45%;
    }
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.colors.accent};
    margin-top: 0;
    margin-bottom: 20px;
`;

const EmptyMessage = styled.p`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-style: italic;
`;

const SongList = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export {
    LibraryContainer,
    Title,
    EmptyMessage,
    SongList,
}