"use client";
import style from "./Navbar.module.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router=useRouter();
    return (
        <div className={style.navcontainer}>
            <div className={style.logo}>
                <img src="/logo.jpg" alt="logo" />
            </div>
            <div className={style.navlink}>
                <ul>
                   <li><a onClick={() => router.push("/")}>Home</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Search 🔍</a></li>
                    <li><a href="#">Cart ⬛</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
