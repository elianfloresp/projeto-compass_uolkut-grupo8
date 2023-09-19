import { ReactNode } from "react";
import classes from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  shadow: boolean;
}

function Card(props: CardProps) {
  const cardClasses = `${classes.card} ${props.shadow ? classes.shadow : ""}`;

  return (
    <div className={cardClasses}>
      {props.children}
    </div>
  );
}

export default Card;
