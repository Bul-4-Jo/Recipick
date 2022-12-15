import styled from 'styled-components';

export const ProductItemWrapper = styled.li`
  width: 35.897vw;
`;

export const ImageWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 14 / 9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductName = styled.p`
  line-height: 2rem;
  margin-top: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const ProductPrice = styled.strong`
  display: block;
  margin-top: 3px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
`;
