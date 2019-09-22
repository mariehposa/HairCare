import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationStyle = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: navy blue;
    font-family: helvetica;
    margin-right: 2rem;
`