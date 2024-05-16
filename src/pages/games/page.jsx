import { Games } from "../../components/games.jsx";
import { games as importedGames } from "../../server/games.json"; // Importa el JSON
import { useState } from "react";
import { SimpleGrid } from "@mantine/core";
import "./games.css";

const Juegos = () => {
  // Inicia el estado con los datos del archivo JSON importado
  const [games] = useState(importedGames);

  return (
    <>
      <div>
        <h1 className="div__Games">Lista de juegos</h1>
        <p className="p__Games">
          En esta sección podrás encontrar una lista de los juegos favoritos de
          ti mi bebe, da clic en cada uno para que puedas ir a las paginas de
          cada uno
        </p>
      </div>
      <SimpleGrid cols={3}>
        <Games games={games} />
      </SimpleGrid>
    </>
  );
};

export default Juegos;
