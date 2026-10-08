import styled from "styled-components";


const HeaderContainer = styled.header`
    padding: 20px 0;
    border-bottom: 1px solid #333;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    margin: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 2rem;
`;

export {
    HeaderContainer,
    Title,
}