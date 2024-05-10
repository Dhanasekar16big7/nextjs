import { Sidebar } from "@/components/sidebar";


export default function AdminLayout({children}: {children:React.ReactNode}) {
    return(
        <>
        <div className={`min-h-screen w-full bg-white text-black flex `}>
        <Sidebar />
        <main className='m-0 mt-0 sm:ml-[240px] sm:mt-0 w-full'>{children}</main>
        </div>
        </>
    )
}