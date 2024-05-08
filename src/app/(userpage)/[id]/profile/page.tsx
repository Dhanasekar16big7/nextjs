import BdCard from "@/components/BdCard";
// import { db } from "@vercel/postgres";
interface Props {
    params : {
        id : string
    }
}

// export const getUserData = async (username: string) => {
//     console.log("username", username);
//     const client = await db.connect();
//     const user: User = (await client.query(`SELECT * FROM users WHERE username = $1;`, [username])).rows[0];
//     console.log("User data: ", user);
//     return user;
// };


const UserProfile = async (props : Props) => {
    // const user: User = await getUserData(props.params.id);
    // console.log(user);
    return ( 
        <>
        <BdCard userId={props.params.id} />
        {/* <p>{props.params.id}</p> */}
        </>
     );
}
 
export default UserProfile;