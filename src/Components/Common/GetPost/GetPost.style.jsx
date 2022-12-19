import styled from 'styled-components';

const GetPostWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 44px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ByAlbumWrapper = styled.div`
  button {
    margin: 9px 16px;
  }
  img {
    width: 26px;
  }
`;

const ByListWrapper = styled.div`
  button {
    margin: 9px 16px;
  }
  img {
    width: 26px;
  }
`;
