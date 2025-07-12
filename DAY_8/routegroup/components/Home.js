"use client";
import { useRouter } from "next/navigation";
import style from "./Home.module.css";
import Form from "./form";

const Home = () => {
  const router = useRouter();

  return (
    <div className={style.home}>
      <div>
        <h1>Welcome To our Blog Website</h1>
      </div>

      <div className={style.main}>
        <h1>Click the button to Explore</h1>
        <div className={style.btn}>
          <button onClick={() => router.push("/userlogin")}>For User</button>
          <button onClick={() => router.push("/adminlogin")}>For Admin</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
