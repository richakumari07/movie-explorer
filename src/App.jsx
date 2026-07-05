import { useState } from "react";

import interstellar from "./image/Interstellar.jpg";
import inception from "./image/Inception.jpg";
import joker from "./image/Joker.jpg";
import batman from "./image/Batman.jpg";
import avatar from "./image/avatar.jpg";
import titanic from "./image/titanic.jpg";
import avengers from "./avenger.jpg";
import oppenheimer from "./image/Oppenheimer.jpg";
import dune from "./image/dune.jpg";
import gladiator from "./image/gladiator.jpg";
import deadpool from "./image/dead pool.jpg";
import spiderman from "./image/spider man.jpg";
function App() {
  const [search, setSearch] = useState("");

  const movies = [
    {
      title: "Interstellar",
      year: "2014",
      rating: "8.7",
      image: interstellar,
    },
    {
      title: "Inception",
      year: "2010",
      rating: "8.8",
      image: inception,
    },
    {
      title: "Joker",
      year: "2019",
      rating: "8.4",
      image: joker,
    },
    {
      title: "Batman",
      year: "2022",
      rating: "7.8",
      image: batman,
    },
    {
  title: "Avatar",
  year: "2009",
  rating: "7.9",
  image: avatar,
},
{
  title: "Titanic",
  year: "1997",
  rating: "7.9",
  image: titanic,
},
{
  title: "Avengers",
  year: "2012",
  rating: "8.0",
  image: avengers,
},
{
  title: "Oppenheimer",
  year: "2023",
  rating: "8.3",
  image: oppenheimer,
},
{
  title: "Dune",
  year: "2021",
  rating: "8.0",
  image: dune,
},
{
  title: "Gladiator",
  year: "2000",
  rating: "8.5",
  image: gladiator,
},
{
  title: "Deadpool",
  year: "2016",
  rating: "8.0",
  image: deadpool,
},
{
  title: "Spider-Man",
  year: "2021",
  rating: "8.2",
  image: spiderman,
},
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand fw-bold">
            🎬 Movie Explorer
          </span>
        </div>
      </nav>

      <div className="container py-5">
        <h1 className="text-center mb-3 text-dark fw-bold">
          Popular Movies
        </h1>

        <p className="text-center text-secondary mb-5">
          Discover trending movies
        </p>

        <div className="row justify-content-center mb-5">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="🔍 Search movies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          {filteredMovies.map((movie, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 shadow">
               <img
  src={movie.image}
  alt={movie.title}
  loading="lazy"
  className="card-img-top"
  style={{ height: "350px", objectFit: "cover" }}
/>

                <div className="card-body">
                  <h5>{movie.title}</h5>
                  <p>Year: {movie.year}</p>
                  <p>⭐ {movie.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;