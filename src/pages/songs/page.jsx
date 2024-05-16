/* eslint-disable react/no-unknown-property */
import { SimpleGrid } from "@mantine/core";
import "./page.css";

const Songs = () => {
  return (
    <>
      <h1>Songs</h1>
      <div className="div__Songs">
        <p>
          Aqui estan tus canciones favoritas y coloque mas canciones que me
          gustan, espero que te gusten, recuerda que siempre estare para ti, te
          amo mi mundo.
        </p>
        <p>
          Estas canciones son las que me calman, me motivan y me hacen sentir
          bien, espero que te gusten, siempre e dicho que las canciones son
          importantes para mi, siempre me han ayudado a sentirme bien, a
          sentirme feliz, a sentirme amado, a sentirme especial, a sentirme que
          soy importante, a sentirme que soy el mejor hombre del mundo, a
          sentirme que soy el hombre mas afortunado del mundo, a sentirme que
          soy el hombre mas feliz del mundo, a sentirme que soy el hombre mas
          enamorado del mundo.
        </p>
        <p>
          Es por eso que tu eres mi cancion favorita, tu eres la cancion que me
          calma, la cancion que me motiva, la cancion que me hace sentir bien,
          la cancion que me hace sentir feliz, la cancion que me hace sentir
          amado, la cancion que me hace sentir especial, la cancion que me hace
          sentir que soy importante, la cancion que me hace sentir que soy el
          mejor hombre del mundo, la cancion que me hace sentir que soy el
          hombre mas afortunado del mundo, la cancion que me hace sentir que soy
          el hombre mas feliz del mundo, la cancion que me hace sentir que soy
          el hombre mas enamorado del mundo.
        </p>
        <SimpleGrid cols={3}>
          <iframe
            className="iframe__Songs"
            src="https://open.spotify.com/embed/playlist/7638gelJucsQswcOhCOy64"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>

          <iframe
            className="iframe__Songs"
            src="https://open.spotify.com/embed/playlist/6luTexFEFHKK1m1of5RSa8"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>

          <iframe
            className="iframe__Songs"
            src="https://open.spotify.com/embed/artist/3YQKmKGau1PzlVlkL1iodx"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>

          <iframe
            className="iframe__Songs"
            src="https://open.spotify.com/embed/playlist/4ujEy8Lp6Clukm2WwuZ91I"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>

          <iframe
            className="iframe__Songs"
            src="https://open.spotify.com/embed/artist/46gyXjRIvN1NL1eCB8GBxo"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </SimpleGrid>
      </div>
    </>
  );
};

export default Songs;
