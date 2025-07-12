import Navbar from "@/components/Navbar"

const AdminL=({children})=>{
    return(
        <div>
         <Navbar></Navbar>
         {children}          
        </div>
    )
}

export default AdminL;