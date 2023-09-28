import { FC } from "react";
import { styled } from "styled-components";
import FriendItem from "./FriendItem";

type Item = {id: string, image: string, name: string};
interface FriendListProps {
  items: Item[];
}

const FriendListContainer = styled.div`
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

  transition: all 0.1s linear;
  @media (min-width : 768px) {
    width: 280px;
    height: 411px; 
  }
`;

const ListName = styled.p`
  align-text: start;

  color: #4B4B4B;
  font-family: "Roboto Flex";
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;

  padding-left: 27.43px;

  transition: all 0.1s linear;
  @media (min-width : 768px) {
    padding-left: 24px;
  }
`;

const ShowAllButton = styled.button`
  text-align: end;

  color: #ED6D25;
  font-family: "Roboto Flex";
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem; 

  padding-right: 27.43px;

  transition: all 0.1s linear;
  @media (min-width : 768px) {
    padding-right: 21px;
  }
`;

const ItemListContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 36.54px;
  grid-row-gap: 33px;
   
  transition: all 0.1s linear;
  @media (min-width : 768px) {
    grid-column-gap: 30px;
  }
`;

const FriendListCard: FC<FriendListProps> = (props) => {
  return (
    <FriendListContainer>
      <ListName>Amigos ({props.items.length})</ListName>
      <ShowAllButton>Ver todos</ShowAllButton>

      <ItemListContainer>
        {
          props.items.filter( (_, index) => index < 9).map(item => 
            <FriendItem 
              key={item.id}
              image={item.image}
              name={item.name}
            />
          )
        }
      </ItemListContainer>
    </FriendListContainer>
  );
}

export default FriendListCard;
