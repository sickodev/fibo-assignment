import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SidebarD from "@/components/SidebarD";
import Image from "next/image";

export default function Home() {
    return (
        <main className='flex'>
            <Sidebar className='basis-1/7 mx-2' />
            <SidebarD className='basis-1/5 px-3' />
            <div className='md:basis-4/5 basis-6/7 px-2'>
                <Navbar />
                <div className='sm:grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-8 my-5'>
                    <div className='col-span-1 row-span-2 h-full w-48 bg-black border-2 border-white'></div>
                    <div className='col-span-1 row-span-1 h-96 w-48 bg-black border-2 border-white'></div>
                    <div className='col-span-1 row-span-1 h-96 w-48 bg-black border-2 border-white'></div>
                </div>
            </div>
        </main>
    );
}
