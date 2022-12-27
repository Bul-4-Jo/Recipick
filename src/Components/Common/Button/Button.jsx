import React from 'react';
import { StyledButton } from './Button.style';

function Button({ className, onClick, content, disabled, active, formName }) {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled} active={active} form={formName}>
      {content}
    </StyledButton>
  );
}

Button.defaultProps = { disabled: true };

export default Button;
