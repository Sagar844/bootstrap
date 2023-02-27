import React from "react";


const posturl = (posterpath)  => {
    return `https://image.tmdb.org/t/p/original${posterpath}`
}

export const MoovieCard = ({ title, id ,poster_path}) => {
  return (
    <div className="" key={id}>
      <h1>{title}</h1>
      <img className="w-40 " src= {posturl(poster_path)}  alt="" />
      
    </div>
  );
};
