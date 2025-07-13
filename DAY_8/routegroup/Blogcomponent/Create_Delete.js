"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./Create_Delete.module.css";

const CreDEL = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    year: "",
    description: "",
    image: "",
  });

  const router = useRouter();

  useEffect(() => {
    fetch("/Movie_Data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Failed to load movie data", err));
  }, []);

  const handleDelete = (id) => {
    const updated = movies.filter((movie) => movie.id !== id);
    setMovies(updated);
  };

  const handleAdd = () => {
    if (!newMovie.title || !newMovie.year || !newMovie.description || !newMovie.image) {
      alert("Please fill all fields.");
      return;
    }

    const id = Date.now();
    const movieToAdd = { ...newMovie, id };
    setMovies([...movies, movieToAdd]);

    setNewMovie({
      title: "",
      year: "",
      description: "",
      image: "",
    });
  };

  return (
    <div className={style.blog}>
      <h1>Movie Blog Manager</h1>

    
      <div className={style.form}>
        <h2>Create New Movie</h2>
        <input
          type="text"
          placeholder="Movie Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Release Year"
          value={newMovie.year}
          onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newMovie.image}
          onChange={(e) => setNewMovie({ ...newMovie, image: e.target.value })}
        />

        <button className={style.addButton} onClick={handleAdd}> Add Movie</button>
      </div>

      
      <div className={style.cardcontainer}>
        {movies.map((movi) => (
          <div className={style.card} key={movi.id}>
            <h3 className={style.movieTitle}>{movi.title}</h3>
            <img
              src={movi.image}
              alt={movi.title}
              onClick={() =>
                router.push(
                  `/description?img=${movi.image}&title=${encodeURIComponent(
                    movi.title
                  )}&des=${encodeURIComponent(movi.description)}`
                )
              }
            />
            <p className={style.year}> {movi.year}</p>
            <p className={style.description}>{movi.description.slice(0, 100)}...</p>
            <button className={style.deleteButton} onClick={() => handleDelete(movi.id)}> Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreDEL;
