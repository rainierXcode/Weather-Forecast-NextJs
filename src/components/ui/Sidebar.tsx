"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Sidebar({
} ){

    return (
        <div className={cn(
            "fixed left-0 top-0 h-screen w-72  text-white  z-50 py-4 pl-4 border",
        )}>
            <aside className="bg-indigo-900 drop-shadow-[0_2px_13px_rgba(46,49,145,0.4)] w-full h-full rounded-md px-6">
                <header className="flex items-center justify-center py-8 gap-x-2">
                    <Image src='logo.svg' alt="rrcy_logo" width={32} height={32} ></Image>
                    <div className="font-semibold font-jost">
                        <div className="text-[11px]">AYALA MAGALANG PAMPANGA</div>
                        <div className="text-[7px]">REGIONAL REHABILITATION CENTER FOR YOUTH</div>
                    </div>
                </header>  

                <section className="flex flex-col gap-4 py-4 ">
                 
                </section>

            
            </aside>
        </div>
    )
}