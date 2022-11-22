import styled from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing(4)}`};
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ theme }) => `${theme.spacing(4)}`};
`;

export const Title = styled.h2`
  padding: ${({ theme }) => `${theme.spacing(4)}`};
  text-align: center;
  color: ${({ theme }) => `${theme.colors.grey}`};
  background-color: ${({ theme }) => `${theme.colors.white}`};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50px;
  padding: ${({ theme }) => `${theme.spacing(2)}`};
`;

export const Label = styled.span`
  font-size: 20px;
  color: ${({ theme }) => `${theme.colors.black}`};
`;

export const Percentage = styled.span`
  font-size: 40px;
  color: ${({ theme }) => `${theme.colors.black}`};
`;
