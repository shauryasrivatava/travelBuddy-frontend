import { useSession } from "next-auth/react";
import { default as SideNavbar } from "../../../Components/Navbar/SideNavbar"

const index=()=>{

    const{data:session} = useSession({required:true});
    return(
        <SideNavbar />
    )
}

export default index;