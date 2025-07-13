"use client";
import { useSearchParams } from "next/navigation";
import style from "./Disci.module.css";

const Discomp = () => {
  const searchparams = useSearchParams();
  const img = searchparams.get("img");
   const name = decodeURIComponent(searchparams.get("title"));
  const des = decodeURIComponent(searchparams.get("des"));
  

  return (
    <div className={style.card}>
      <h1>Description</h1>
      <img src={img} alt="home" />
      <p>Movie Title: {name}</p>
      <p>Description: {des}</p>
    </div>
  );
};

export default Discomp;
