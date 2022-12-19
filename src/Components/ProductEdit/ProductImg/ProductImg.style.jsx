import styled from 'styled-components';

export const ProductImgWrapper = styled.div``;

export const Title = styled.strong`
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const ImgWrapper = styled.div`
  position: relative;
  margin-top: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 161 / 118;
  background-color: ${({ theme }) => theme.colors.subBackground};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  label {
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;
