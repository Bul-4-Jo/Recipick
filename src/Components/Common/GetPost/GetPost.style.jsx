import styled from 'styled-components';

export const GetPostWrapper = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  height: 44px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ByListWrapper = styled.div`
  button {
    margin: 9px 8px;
    cursor: pointer;
  }
  img {
    width: 26px;
  }
`;

export const ByAlbumWrapper = styled.div`
  button {
    margin: 9px 16px 9px 8px;
    cursor: pointer;
  }
  img {
    width: 26px;
  }
`;
