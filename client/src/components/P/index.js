import styled from 'styled-components';
import margin from '../../utils/margin';

const P = styled.p`
    ${margin}
    color: ${props => props.color ? props.color : props.theme.black};
    font-size: 1.25rem;
    line-height: 1.6;
`;

export default P;
