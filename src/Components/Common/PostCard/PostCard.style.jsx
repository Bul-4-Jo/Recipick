import styled from 'styled-components';

export const PostCardWrapper = styled.section`
  background-color: #fff;
`;

export const WriterInfo = styled.div`
  display: flex;
  align-items: ceter;
  justify-content: space-between;
  padding: 20px 15px;
  img {
    width: 20px;
  }
`;

export const GetText = styled.p`
  padding: 0px 20px 16px 65px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 140%;
`;

export const GetImg = styled.img`
  padding: 0 20px 12px 65px;
`;
