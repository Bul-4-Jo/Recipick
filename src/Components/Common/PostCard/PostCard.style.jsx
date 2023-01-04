import styled from 'styled-components';

export const PostCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* padding-bottom: 27px; */
  background-color: #fff;

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

export const WriterInfo = styled.div`
  display: flex;
  align-items: ceter;
  justify-content: space-between;
  padding: 20px 15px;
  button > img {
    width: 20px;
  }
`;

export const GetText = styled.p`
  padding: 0px 20px 16px 65px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 140%;
`;

export const GetImg = styled.img`
  margin: 0 20px 12px 65px;
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

  input {
    flex: 1 1 auto;
    line-height: 26px;
    padding: 0;
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-family: 'SpoqaHanSans', sans-serif;

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
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
  font-size: ${({ theme }) => theme.fontSizes.sm};

  img {
    width: 14px;
    height: 14px;
  }
`;
