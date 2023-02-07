import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  max-height: 100%;
  text-align: center;
  white-space: pre-wrap;
  word-break: break-all;
  overflow: hidden;
  &.small {
    font-size: 12px;
    padding: 7px 11px;
    border-radius: 26px;
  }
  &.mediumSmall {
    font-size: 14px;
    padding: 7px 32px;
    border-radius: 32px;
  }
  &.medium {
    font-size: 14px;
    padding: 8px 40px;
    border-radius: 30px;
  }

  &.large {
    font-size: 14px;
    padding: 13px 0px;
    border-radius: 44px;
    width: 100%;
  }

  &.small,
  &.medium {
    background-color: ${props => (props.active ? '#dbdbdb' : '#ff7d7d')};
    color: ${props => (props.active ? '#767676' : '#fff')};
    outline: ${props => (props.active ? '1px solid #dbdbdb' : 'none')};
  }
  :disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
