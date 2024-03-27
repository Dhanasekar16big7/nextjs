import SideNavbar from "@/components/SideNavbar";

export default function AdminLayout({children}: {children:React.ReactNode}) {
    return(
        <>
        <div className={`min-h-screen w-full bg-white text-black flex `}>
            <SideNavbar />
            {children}
        </div>
        </>
    )
}