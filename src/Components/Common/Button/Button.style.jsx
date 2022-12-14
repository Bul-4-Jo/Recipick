import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  &.small {
    font-size: 12px;
    padding: 7px 11px;
    border-radius: 26px;
  }
  &.mediumSmall {
    font-size: 14px;
    padding: 7px 32px;
    border-radius: 32px;
  }
  &.medium {
    font-size: 14px;
    padding: 8px 40px;
    border-radius: 30px;
  }

  &.large {
    font-size: 14px;
    padding: 13px 0px;
    border-radius: 44px;
    width: 100%;
  }
  // <Button className="large" active={false}>follow</Button>
  &.small,
  &.medium {
    background-color: ${props => (props.active ? `${({ theme }) => theme.colors.primary}` : '#fff')};
    color: ${props => (props.active ? '#fff' : `${({ theme }) => theme.colors.primary}`)};
    box-shadow: ${props => (props.active ? 'none' : `0 0 0 1px inset ${({ theme }) => theme.colors.background}`)};
  }
  :disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

function Button(props) {
  const { onClick, content, disabled } = props;

  return (
    <StyledButton onClick={onClick} className={props.className} disabled={disabled}>
      {content}
    </StyledButton>
  );
}

Button.defaultProps = {
  disabled: true,
};

export default Button;
