import styled from 'styled-components';

const TableCellHeader = styled.th`
    color: #8f8f8f;
    font-weight: 200;
    text-transform: uppercase;
    text-align: left;
    padding-bottom: 0.5rem;
    text-align: ${props => props.textRight ? 'right' : 'left'};
`;

export default TableCellHeader;
