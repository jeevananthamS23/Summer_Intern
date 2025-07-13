"use client";
import style from "./Navbar.module.css";
import { useRouter } from "next/navigation";

const Navbar = ({val}) => {
    const router=useRouter();
    return (
        <div className={style.navcontainer}>
            <div className={style.logo}>
                <img src="/logo.webp" alt="logo" />
            </div>
            <div className={style.navlink}>
                <ul>
                   <li><a onClick={() => router.push("/")}>Home</a></li>
                    <li><a onClick={()=>{if(val!=="Admin"){alert("You are not a admin")}
                          else{router.push("/admincreated")}}}>Created</a></li>
                    <li><a onClick={()=>{if(val!=="Admin"){alert("You are not a admin")}
                          else{router.push("/admindelete")}}}>Updated</a></li>
                    <li><a href="#">Happy Learning</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
