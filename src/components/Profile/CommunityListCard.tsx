import { FC } from "react";
import { styled } from "styled-components";
import CommunityItem from "./CommunityItem";

type Item = {id: string, image: string, name: string};
interface CommunityListProps {
  items: Item[];
}

const CommunityListContainer = styled.div`
  width: 320px;
  height: 411px;

  box-sizing: border-box;

  border-radius: 16px;
  background: #FDFEFF;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  padding-top: 24px;
  padding-bottom: 25px;
`;

const ListName = styled.p`
  align-text: start;
  padding-left: 27.43px;

  color: #4B4B4B;
  font-family: "Roboto Flex";
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

const ShowAllButton = styled.button`
  text-align: end;
  padding-right: 27.43px;

  color: #ED6D25;
  
  font-family: "Roboto Flex";
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem; 
`;

const ItemListContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 36.54px;
  grid-row-gap: 33px;
`;

const CommunityListCard: FC<CommunityListProps> = (props) => {
  return (
    <CommunityListContainer>
      <ListName>Comunidade ({props.items.length})</ListName>
      <ShowAllButton>Ver todos</ShowAllButton>

      <ItemListContainer>
        {
          props.items.filter( (_, index) => index < 9).map(item => 
            <CommunityItem 
              key={item.id}
              image={item.image}
              name={item.name}
            />
          )
        }
      </ItemListContainer>
    </CommunityListContainer>
  );
}

export default CommunityListCard;
