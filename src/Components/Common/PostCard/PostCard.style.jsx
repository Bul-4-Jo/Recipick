import styled from 'styled-components';

export const PostCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.ground};

  > section {
    flex: 0 0 auto;
    margin-top: auto;
    & + div {
      margin-top: 0;
    }
  }

  & > section {
    margin-top: 20px;
    padding-left: 65px;
    padding-bottom: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const PostContentWrapper = styled.div`
  margin-left: 65px;
`;

export const WriterInfo = styled.div`
  display: flex;
  align-items: ceter;
  justify-content: space-between;
  padding: 20px 15px;
  button > img {
    width: 20px;
  }
`;

export const GetText = styled.div`
  padding: 0px 20px 16px 0;
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 140%;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const RecipeText = styled.div`
  div {
    display: flex;
    align-items: center;
  }
  strong {
    display: inline-block;
    margin: 8px 0;
    font-weight: 500;
  }
  p {
    white-space: pre-line;
    padding-left: 5px;
  }
`;

export const GetImg = styled.img`
  margin: 0 20px 12px 0;
  max-width: 85%;
  border-radius: 10px;
`;

export const UploadDate = styled.span`
  padding-left: 65px;
  padding-bottom: 27px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.subText};
`;

export const PostTagWrapper = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  padding: 0px 20px 16px 65px;
  padding: 0px 20px 16px 0;
`;

export const PostTagItem = styled.li`
  display: flex;
  align-items: center;
  gap: 2px;
  line-height: 24px;
  padding: 0 8px;
  border-radius: 26px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  word-break: keep-all;
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  img {
    width: 14px;
    height: 14px;
  }
`;
