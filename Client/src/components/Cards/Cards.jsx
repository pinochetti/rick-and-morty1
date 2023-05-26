import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div className={style.container}>
      {characters?.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            status={character.status}
            image={character.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

export default Cards;
