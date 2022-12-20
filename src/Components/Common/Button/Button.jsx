import React from 'react';
import { StyledButton } from './Button.style';

function Button({ className, onClick, content, disabled, active }) {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled} active={active}>
      {content}
    </StyledButton>
  );
}

Button.defaultProps = {
  disabled: true,
};

export default Button;
