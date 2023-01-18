import styled from 'styled-components';

export const GetPostWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.ground};
  display: flex;
  justify-content: flex-end;
  height: 44px;
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.border}; */
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

export const AlbumWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.ground};
  padding: 0 15px 15px;
`;
