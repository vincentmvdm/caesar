import { css } from 'styled-components';

const padding = props => css`
    padding-top: ${props.paddingTop ? props.theme.scale[props.paddingTop] : '0'};
    padding-bottom: ${props.paddingBottom ? props.theme.scale[props.paddingBottom] : '0'};
    padding-left: ${props.paddingLeft ? props.theme.scale[props.paddingLeft] : '0'};
    padding-right: ${props.paddingRight ? props.theme.scale[props.paddingRight] : '0'};
`;

export default padding;
