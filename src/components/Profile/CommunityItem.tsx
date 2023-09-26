import { FC } from "react";
import { styled } from "styled-components";

interface CommunityProp{
  image: string;
  name: string;
}

const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommunityImage = styled.img`
  width: 56px;
  height: 56px;

  border-radius: 0.75rem;
`;

const CommunityName = styled.p`
  color: #4B4B4B;
  font-family: "Roboto Flex";
  font-size: 0.875rem;
  font-weight: 400;

  margin-top: 8px;
`;

const CommunityItem: FC<CommunityProp> = (props: CommunityProp) => {
  return (
    <CommunityContainer>
      <CommunityImage src={props.image}/>
      <CommunityName>{props.name}</CommunityName>
    </CommunityContainer>
  );
}

export default CommunityItem;
