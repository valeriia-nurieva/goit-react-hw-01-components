import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  background-color: ${({ theme }) => `${theme.colors.white}`};
  box-shadow: 14px 17px 29px -9px rgba(89, 86, 89, 1);
`;
export const Avatar = styled.img`
  width: 60px;
  margin-right: ${({ theme }) => `${theme.spacing(2)}`};
`;
export const Status = styled.span`
  margin-right: ${({ theme }) => `${theme.spacing(2)}`};
  border-radius: 50px;
  width: 16px;
  height: 16px;
  background-color: ${({ theme, isOnline }) =>
    `${isOnline ? theme.colors.green : theme.colors.red}`};
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => `${theme.colors.black}`};
`;
