import styled from 'styled-components';
import margin from '../../utils/margin';

const H3 = styled.h3`
    ${margin}
    font-size: 1.5rem;
    color: ${props => props.color ? props.color : props.theme.blue};
`;

export default H3;
