import styled from 'styled-components';

export const ChatItemWrapper = styled.li`
  display: flex;
  gap: 12px;
  position: relative;
  min-width: 0;
`;

export const ProfileImgWrapper = styled.div`
  flex: 0 0 auto;
  position: relative;
`;

export const Dot = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f26e22;
`;

export const ItemContent = styled.div`
  position: relative;
  width: calc(100% - 125px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const UserNameWrapper = styled.strong`
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 700;
`;

export const ItemContentText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const ChatItemTime = styled.div`
  align-self: center;
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
