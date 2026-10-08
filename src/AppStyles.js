import styled from 'styled-components';

const AppContainer = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 30px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    }
`;

const SearchSection = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 1;
    max-width: 55%;
    }
`;

export {
    AppContainer,
    MainContent,
    SearchSection,
}