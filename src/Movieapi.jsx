import axios from "axios";

import React, { useEffect, useState } from "react";
import { MoovieCard } from "./MoovieCard";

export const Movieapi = () => {
  const [movie, setmovie] = useState([]);
  const Apikey = "day?api_key=3ac20e37c3b1bdd32dadec03d228864f";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/trending/all/" + Apikey
        );

        return setmovie(res.data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="flex-wrap grid grid-cols-8 gap-2 mx-3">
      {movie.map((mov) => {
        return (
          <div className="" key={mov.id}>
            <MoovieCard {...mov} />
          </div>
        );
      })}
    </div>
  );
};
