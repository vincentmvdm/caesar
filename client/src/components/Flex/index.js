import styled from 'styled-components';
import margin from '../../utils/margin';

const Flex = styled.div`
    ${margin}
    display: flex;
    height: ${props => props.height ? props.height : 'auto'};
    align-items: ${props => props.alignItems ? props.alignItems : 'stretch'};
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
    text-align: ${props => props.textCenter ? 'center' : 'left'};
    flex-direction: ${props => props.column ? 'column' : 'row'};
`;

export default Flex;
