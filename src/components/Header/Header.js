import React from 'react';
import { HeaderContainer, Title } from './styles';

const Header = ({ appName }) => {
    return (
        <HeaderContainer>
            <Title>{appName}</Title>
        </HeaderContainer>
    );
}

export default Header;