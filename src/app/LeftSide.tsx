import {Input}  from "@/components/ui/Input"
import { Search, ArrowUpRight, ArrowDownLeft } from "lucide-react"
import Image from "next/image"
import ClearNight from '@/assets/current_icons/clear_night.svg'

export default function LeftSide(){
    return (
        <div className="fixed left-0 w-[300px] inset-y-0 bg-sky-100/70 px-2 py-2 text-gray-950">
            <div className="flex items-center justify-center gap-1 px-2 rounded-sm bg-[#AED8F4] py-0.5">
                <Search size={16}/>
                <Input name="location" sizing="sm" variant="ghost" placeholder="Weather in your city" className="h-5  text-sm text-left font-sans placeholder:text-sm border-none focus:ring-0 p-0 placeholder:text-neutral-900/80"/>
            </div>

            <div className="mt-8">
                <div className="font-k2d text-xl text-center">Manila, PH</div>  
                <div className="font-k2d text-8xl relative text-center mt-4 text-[#705AE7]">
                    <div className="text-shadow-[0_2px_1px_rgba(0_0_0_/_0.25)]">
                        <span className="">28</span>
                        <span>°</span>
                    </div>
                    <Image src={ClearNight} alt="clear_night" width={100} height={100} className="absolute top-14 right-10 drop-shadow-md"/>
                </div>
            </div>

            <div className="mt-20 text-lg text-center font-k2d">Clear Night</div>

            <div className="font-inria_serif mt-4 text-sm text-center">MONDAY | JAN 31 | 08: 30pm </div>

            <div className="font-inria_serif mt-12 flex justify-between px-4 items-center gap-4">
                <div>
                    <div  className="flex items-center text-sm mb-0.5">
                        Sunrise
                        <ArrowUpRight className="pl-0.5 -translate-y-1 text-[#EC9929]"/>
                    </div>
                    <div className="text-lg">6:30 Am</div>
                </div>

                <div>
                    <div  className="flex items-center text-sm mb-0.5">
                        <ArrowDownLeft className="pl-0.5  text-[#705AE7]"/>
                        Sunset
                    </div>
                    <div className="text-lg">5:30 Pm</div>
                </div>
            </div>

         
        </div>
    )
}