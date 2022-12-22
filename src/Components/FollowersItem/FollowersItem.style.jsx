import styled, { css } from 'styled-components';

export const FollowersItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  & + li {
    margin-top: 16px;
  }

  > a {
    flex: 1 1 auto;
  }

  button {
    flex: 0 0 58px;
  }
`;
