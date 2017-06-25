import styled from 'styled-components';
import padding from '../../utils/padding';

const FormButton = styled.button`
    ${padding}
    background-color: #1ac776;
    border-radius: 256px;
    border: none;
    color: white;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 32px;
    padding-right: 32px;
    font-family: inherit;
    font-size: inherit;
    text-transform: uppercase;

    &:hover {
        background-color: #2ee491;
        cursor: pointer;
    }
`;

export default FormButton;
