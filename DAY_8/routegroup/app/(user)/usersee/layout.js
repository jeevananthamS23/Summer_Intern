"use client";
import { useRouter,useSearchParams } from "next/navigation";

import Navbar from "@/components/Navbar";

const UserL=({children})=>{
    const router=useRouter();
    const searchparams=useSearchParams();
    const name=searchparams.get("name");
    return(
        <div>
         <Navbar val={name}></Navbar>
         {children}          
        </div>
    )
}

export default UserL;