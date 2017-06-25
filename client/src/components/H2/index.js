import styled from 'styled-components';
import margin from '../../utils/margin';

const H2 = styled.h2`
    ${margin}
    font-size: 2rem;
    color: ${props => props.color ? props.color : props.theme.blue};
`;

export default H2;
