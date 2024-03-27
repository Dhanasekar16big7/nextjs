import BdCard from "@/components/BdCard";
import PageTitle from "@/components/PageTitle";

const BussinessCard = () => {
    return ( 
        <>
        <main className="flex min-h-screen flex-col gap-5 p-0 w-full">
        <PageTitle title="Bussiness Card" />
        {/* <div className="w-full container flex justify-center align-center p-5"> */}
            <BdCard />
        {/* </div> */}
        </main>
        </>
     );
}
 
export default BussinessCard;