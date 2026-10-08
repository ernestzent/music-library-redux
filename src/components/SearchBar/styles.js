import styled from "styled-components";

const Form = styled.form`
    display: flex;
    gap: 12px;
    margin-bottom: 30px;
`;

const Input = styled.input`
    flex: 1;
    padding: 14px 20px;
    border-radius: 24px;
    border: 1px solid #333;
    background-color: #242424;
    color: ${({ theme }) => theme.colors.textMain};
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
        border-color: ${({ theme }) => theme.colors.accent};
        box-shadow: 0 0 0 2px rgba(29, 185, 84, 0.2);
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.textSecondary};
    }
`;

const Button = styled.button`
    padding: 0 24px;
    border-radius: 24px;
    border: none;
    background-color: ${({ theme }) => theme.colors.accent};
    color: #000;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.1s ease, background-color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.accentHover};
        transform: scale(1.02);
    }
    &:active {
        transform: scale(0.98);
    }
`;

export {
    Form,
    Input,
    Button,
}