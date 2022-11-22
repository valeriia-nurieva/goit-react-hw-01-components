import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  background-color: ${({ theme }) => `${theme.colors.white}`};
  margin-bottom: ${({ theme }) => `${theme.spacing(4)}`};
  box-shadow: 14px 17px 29px -9px rgba(89, 86, 89, 1);
`;
export const Description = styled.div`
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing(6)}`};
`;
export const Avatar = styled.img`
  width: 120px;
  border-radius: 50px;
  background-color: ${({ theme }) => `${theme.colors.accent}`};
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ theme }) => `${theme.spacing(2)}`};
`;
export const Name = styled.p`
  font-size: 40px;
  margin-bottom: ${({ theme }) => `${theme.spacing(2)}`};
`;
export const Info = styled.p`
  font-size: 24px;
  margin-bottom: ${({ theme }) => `${theme.spacing(2)}`};
  color: ${({ theme }) => `${theme.colors.grey}`};
`;
export const StatsList = styled.ul`
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid ${({ theme }) => `${theme.colors.grey}`};
  justify-content: space-between;
  background-color: ${({ theme }) => `${theme.colors.background}`};
`;
export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing(4)}`};
  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => `${theme.colors.grey}`};
  }
`;
export const Label = styled.span`
  color: ${({ theme }) => `${theme.colors.grey}`};
  margin-bottom: ${({ theme }) => `${theme.spacing(1)}`};
`;
export const Quantity = styled.span`
  width: 100%;
  text-align: center;
  font-weight: 700;
`;
