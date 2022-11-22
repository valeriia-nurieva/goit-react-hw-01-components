import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  border-radius: 5px;
  background-color: ${({ theme }) => `${theme.colors.white}`};
`;
export const Head = styled.thead`
  background-color: ${({ theme }) => `${theme.colors.accent}`};
  padding: ${({ theme }) => `${theme.spacing(2)}`};
`;

export const HeadItem = styled.th`
  background-color: ${({ theme }) => `${theme.colors.accent}`};
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  color: ${({ theme }) => `${theme.colors.black}`};
`;
export const TableList = styled.tr`
  :nth-child(2n) {
    background-color: ${({ theme }) => `${theme.colors.background}`};
  }
  :last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
export const TableItem = styled.td`
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  color: ${({ theme }) => `${theme.colors.black}`};
`;
