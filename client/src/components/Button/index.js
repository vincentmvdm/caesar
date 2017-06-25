import styled from 'styled-components';
import { Link } from 'react-router-dom';
import padding from '../../utils/padding';

const Button = styled(Link)`
    ${padding}
    background-color: ${props => props.notFocused ? 'white' : '#1ac776'};
    border-radius: 256px;
    border: ${props => props.notFocused ? '1px solid #2f4ab6' : 'none'};
    color: ${props => props.notFocused ? '#2f4ab6' : 'white'};
    padding-top: 8px;
    box-sizing: border-box;
    padding-bottom: 8px;
    padding-left: 32px;
    padding-right: 32px;
    font-family: inherit;
    font-size: inherit;
    font-weight: 200;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
        background-color: ${props => props.notFocused ? '#f5f5f5' : '#2ee491' };
        cursor: pointer;
    }
`;

export default Button;
