import styled from 'styled-components';

const TableCell = styled.td`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: ${props => props.textRight ? 'right' : 'left'};
    color: ${props => props.theme.black};
`;

export default TableCell;
