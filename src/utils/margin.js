import { css } from 'styled-components';

const margin = props => css`
    margin-top: ${props.marginTop ? props.theme.scale[props.marginTop] : '0'};
    margin-bottom: ${props.marginBottom ? props.theme.scale[props.marginBottom] : '0'};
    margin-left: ${props.marginLeft ? props.theme.scale[props.marginLeft] : '0'};
    margin-right: ${props.marginRight ? props.theme.scale[props.marginRight] : '0'};
`;

export default margin;
