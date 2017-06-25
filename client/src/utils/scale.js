import { css } from 'styled-components';

const size = props => css`
    width: ${props.width ? props.theme.scale[props.width] : 'auto'};
    height: ${props.height ? props.theme.scale[props.height] : 'auto'};
`;

export default size;
