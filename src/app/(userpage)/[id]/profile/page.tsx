import BdCard from "@/components/BdCard";
// import { db } from "@vercel/postgres";
interface Props {
    params : {
        id : string
    }
}

// console.log("params ", props.params.id);


const UserProfile = async (props : Props) => {
    return ( 
        <>
        <BdCard userId={props.params.id} />
        {/* <p>{props.params.id}</p> */}
        </>
     );
}
 
export default UserProfile;