import { FunctionComponent } from "react";
import Pet from "./Pet";
import { Pet as PetType } from "./APIResponeTypes";

const Results: FunctionComponent<{ pets: PetType[] }> = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>Pet not found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
