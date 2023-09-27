import { FC, ReactNode } from 'react';
import { StyledButton } from './LinkButtonStyle';

interface SubmitButtonProps {
  id?: string;
  style?: any;
  children?: ReactNode; 
}

const SubmitButton: FC<SubmitButtonProps> = (props) => {
  return (
    <StyledButton id={props.id} style={props.style} type='submit'>
      {props.children}
    </StyledButton>
  );
}

export default SubmitButton
