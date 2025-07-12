import Navbar from "@/components/Navbar"

const UserL=({children})=>{
    return(
        <div>
         <Navbar></Navbar>
         {children}          
        </div>
    )
}

export default UserL;