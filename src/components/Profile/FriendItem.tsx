import { FC } from "react";
import { styled } from "styled-components";

interface FriendProp{
  image: string;
  name: string;
}

const FriendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FriendImage = styled.img`
  width: 56px;
  height: 56px;

  border-Radius: 50%;
`;

const FriendName = styled.p`
  color: #4B4B4B;
  font-family: "Roboto Flex";
  font-size: 0.875rem;
  font-weight: 400;

  margin-top: 8px;
`;

const FriendItem: FC<FriendProp> = (props: FriendProp) => {
  return (
    <FriendContainer>
      <FriendImage src={props.image}/>
      <FriendName>{props.name}</FriendName>
    </FriendContainer>
  );
}

export default FriendItem;
