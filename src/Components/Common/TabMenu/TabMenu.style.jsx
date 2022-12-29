import styled, { css } from 'styled-components';
import iconHome from '../../../Assets/Icons/icon_home.png';
import iconHomeFill from '../../../Assets/Icons/icon_home_fill.png';
import iconChat from '../../../Assets/Icons/icon_chat.png';
import iconChatFill from '../../../Assets/Icons/icon_chat_fill.png';
import iconPost from '../../../Assets/Icons/icon_post.png';
import iconProfile from '../../../Assets/Icons/icon_profile.png';
import iconProfileFill from '../../../Assets/Icons/icon_profile_fill.png';

const setActiveIcon = type => {
  switch (type) {
    case 'chat':
      return css`
        &.chat {
          color: ${({ theme }) => theme.colors.primary};

          &::before {
            background-image: url(${iconChatFill});
          }
        }
      `;
    case 'profile':
      return css`
        &.profile {
          color: ${({ theme }) => theme.colors.primary};

          &::before {
            background-image: url(${iconProfileFill});
          }
        }
      `;

    default:
      return css`
        &.home {
          color: ${({ theme }) => theme.colors.primary};

          &::before {
            background-image: url(${iconHomeFill});
          }
        }
      `;
  }
};

export const TabMenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 14px;
  height: 60px;
  padding: 0 6px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  a {
    flex: 1 1 0;
    white-space: nowrap;
    text-align: center;
    color: ${({ theme }) => theme.colors.subText};
    font-size: ${({ theme }) => theme.fontSizes.base};

    &::before {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      margin: 0 auto 4px;
      background: no-repeat 0 0 / 24px 24px;
    }

    &.home::before {
      background-image: url(${iconHome});
    }

    &.chat::before {
      background-image: url(${iconChat});
    }

    &.post::before {
      background-image: url(${iconPost});
    }

    &.profile::before {
      background-image: url(${iconProfile});
    }

    ${({ type }) => setActiveIcon(type)}
  }
`;
