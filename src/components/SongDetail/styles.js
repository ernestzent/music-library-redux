import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 20px 0;
`;

const BackButton = styled(Link)`
    display: inline-block;
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    margin-bottom: 25px;
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.accentHover};
        text-decoration: underline;
    }
`;

const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBg};
    border-radius: 8px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

const Image = styled.img`
    width: 100%;
    max-width: 280px;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.textMain};
    line-height: 1.1;
`;

const Artist = styled.h2`
    margin: 0;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

const Text = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    
    strong {
        color: ${({ theme }) => theme.colors.textMain};
    }
`;

const Description = styled.p`
    margin-top: 15px;
    line-height: 1.6;
    color: #ddd;
    font-size: 0.95rem;
    white-space: pre-line;
`;

const LoadingText = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1.1rem;
    margin: 30px 0;
    font-weight: 600;
`;

const ErrorContainer = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.colors.error};
    background-color: rgba(255, 77, 77, 0.1);
    padding: 20px;
    border-radius: 8px;
    margin: 30px 0;
`;

const RetryButton = styled.button`
    margin-top: 15px;
    background-color: ${({ theme }) => theme.colors.error};
    color: #fff;
    border: none;
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
        background-color: #ff3333;
    }
`;

export {
    Container,
    BackButton,
    Card,
    Image,
    Info,
    Title,
    Artist,
    Text,
    Description,
    LoadingText,
    ErrorContainer,
    RetryButton,
}