"use client";
import style from "./Blogs.module.css";
import { useRouter } from "next/navigation";
import { useState ,useEffect} from "react";
const Blogs = () => {
   const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/Movie_Data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Failed to load movie data", err));
  }, []);
  const router = useRouter();
return (
  <div className={style.blog}>
    <h1>Movie Blogs</h1>
    <div className={style.cardcontainer}>
      {movies.map((movi) => (
        <div className={style.card} key={movi.id}>
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
          <div className="Name_Year">
            <p>{movi.title}<span>{movi.year}</span></p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}

export default Blogs;
