"use client";
import { useSearchParams } from "next/navigation";
import style from "./data.module.css";

const Datasee =()=>{
  const searchparams = useSearchParams();
  const name=(searchparams.get("name"));
  const email=searchparams.get("email");

  return (
    <div className={style.card}>
      <h1>DATA</h1>
      <p>Name:  {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Datasee;
