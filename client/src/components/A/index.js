import styled from 'styled-components';
import padding from '../../utils/padding';

const A = styled.a`
    ${padding}
    background-color: white;
    border-radius: 256px;
    color: #2f4ab6;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 32px;
    padding-right: 32px;
    font-family: inherit;
    font-size: inherit;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
        background-color: #f5f5f5;
        cursor: pointer;
    }
`;

export default A;
