import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import "./page.css";

const home = () => {
  return (
    <>
      <div>
        <h1> Luciana´s Blog</h1>
      </div>
      <div className="div__Center">
        <div className="div__Parrafo">
          Hola Luci, te hice esta pagina en la que puedes ver nuestra historia o
          lo que conozco de ti, tus juegos favoritos, tus canciones favoritas,
          las cosas que amo de ti y una lista de las series que estamos viendo y
          vimos, tambien mis planes futuros contigo y por sobre todo el plan a
          futuro que quiero tener contigo, espero que te guste y que te haga
          feliz, te amo mucho mi amor.
        </div>
        <div className="div__Lista">
          <div className="div__Buttons">
            <Button component={Link} to="/history" color="grape">
              History
            </Button>
            <Button component={Link} to="/games" color="grape">
              Games
            </Button>
            <Button component={Link} to="/songs" color="grape">
              Songs
            </Button>
            <Button component={Link} to="/things" color="grape">
              Things
            </Button>
            <Button component={Link} to="/plans" color="grape">
              Plans
            </Button>
            <Button component={Link} to="/list" color="grape">
              Series
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
