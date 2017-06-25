import styled from 'styled-components';
import margin from '../../utils/margin';

const H1 = styled.h1`
    ${margin}
    font-size: 3rem;
    color: ${props => props.color ? props.color : props.theme.blue};
`;

export default H1;
