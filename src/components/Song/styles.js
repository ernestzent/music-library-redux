import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.cardBg};
    padding: 15px;
    border-radius: 6px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const TitleLink = styled(Link)`
    text-decoration: none;
`;

const Title = styled.h2`
    margin: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textMain};
`;

const Artist = styled.h2`
    margin: 0;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

const Actions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
`;

const Details = styled.p`
    margin: 0;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

const AddButton = styled.button`
    background-color: ${({ theme, primary }) => primary ? theme.colors.accent : 'transparent'};
    color: ${({ theme, primary }) => primary ? '#000' : theme.colors.accent};
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: 12px;
    padding: 4px 10px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.accentHover};
        color: #000;
    }
`;

const RemoveButton = styled(AddButton)`
    border-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.error};
    background-color: transparent;

    &:hover {
        background-color: ${({ theme }) => theme.colors.error};
        color: #fff;
    }
`;

export {
    Card,
    Info,
    TitleLink,
    Title,
    Artist,
    Actions,
    Details,
    AddButton,
    RemoveButton,
}