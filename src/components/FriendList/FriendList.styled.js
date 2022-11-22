import styled from 'styled-components';

export const FriendListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 380px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ theme }) => `${theme.spacing(4)}`};
`;
