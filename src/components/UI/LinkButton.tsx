import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledHref } from './LinkButtonStyle';

interface LinkProps {
  id?: string;
  to: string;
  children: ReactNode;

  validate?(): boolean;

  type?: string;
  className?: string;
  style?: any;

  simple?: boolean;
  underline?: boolean;
  secondary?: boolean;
};

const LinkButton: FC<LinkProps> = (props) => {
  const StyledComponent: FC<any> = props.simple ? StyledHref : StyledButton;

  const classes = `${props.secondary && "secondary"} ${props.underline && "underline"}` + props.className;

  const navigate = useNavigate();
  const navigateHandler = (event: MouseEvent) => {
    event.preventDefault();
    
    if (props.validate)
      if (props.validate()) 
        return;

    navigate(props.to);
  };

  return (
    <StyledComponent id={props.id} className={classes} onClick={navigateHandler} style={props.style}>
      {props.children}
    </StyledComponent>
  );
}

export default LinkButton
