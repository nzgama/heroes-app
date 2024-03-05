import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const navigete = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  const onNavigateBack = () => {
    navigete(-1);
  };

  if (!hero) {
    //return <>404 - Not found</>;
    return <Navigate to="/" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          src={heroImageUrl}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alet ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button onClick={onNavigateBack} className="btn btn-outline-primary">
          Regresar
        </button>
      </div>
    </div>
  );
};
