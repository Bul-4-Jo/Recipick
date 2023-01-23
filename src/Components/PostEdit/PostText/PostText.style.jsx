import styled from 'styled-components';

export const PostTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-right: 40px;
`;

export const PostPreview = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  line-height: 20px;
  div {
    margin-bottom: 10px;
    label {
      padding-right: 10px;
    }
    input {
      margin: 0;
      padding-left: 7px;
      vertical-align: middle;
    }
  }
  label,
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: 8px 0;
  }
  input {
    font-family: 'SpoqaHanSans', sans-serif;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.placeholder};
    font-size: ${({ theme }) => theme.fontSizes.base};
    &:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const PostTextArea = styled.textarea`
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  border-radius: 10px;
  width: 100%;
  line-height: 20px;
  height: 44px;
  padding: 12px 12px;
  resize: none;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: 'SpoqaHanSans', sans-serif;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
