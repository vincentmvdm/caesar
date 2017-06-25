import styled from 'styled-components';
import { Link } from 'react-router-dom';
import padding from '../../utils/padding';

const Button = styled(Link)`
    ${padding}
    background-color: #1ac776;
    border-radius: 256px;
    color: white;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 32px;
    padding-right: 32px;
    font-family: inherit;
    font-size: inherit;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
        background-color: #2ee491;
        cursor: pointer;
    }
`;

export default Button;
