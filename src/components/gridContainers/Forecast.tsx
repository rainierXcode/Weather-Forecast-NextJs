"use client";
import logo from '@/assets/forecast_icons/day/Drizzle_1150.svg'
import Image from "next/image";
export default function Forecast(){
    return(
        <div className="bg-[#AED8F4]/40 rounded-lg px-4 py-4 font-k2d mt-4">
            <div className="mb-4 font-bold text-[#0A223B]">Next 12 hours</div>
            <div className="flex items-center gap-4">
                <div className="bg-[#4D7289]/90 rounded-lg  py-2.5 px-5 flex flex-col items-center  gap-1.5">
                    <div className="text-sm mb-1.5 text-white/90">9 PM</div>
                    <Image src={logo}alt="" width={45} height={45}/>
                    <div className='text-lg text-white mt-0.5 font-medium'>27°</div>
                </div>

                <div className="bg-[#4D7289]/90 rounded-lg  py-2.5 px-5 flex flex-col items-center  gap-1.5">
                    <div className="text-sm mb-1.5 text-white/90">9 PM</div>
                    <Image src={logo} alt="" width={45} height={45}/>
                    <div className='text-lg text-white mt-0.5 font-medium'>27°</div>
                </div>

                <div className="bg-[#4D7289]/90 rounded-lg  py-2.5 px-5 flex flex-col items-center  gap-1.5">
                    <div className="text-sm mb-1.5 text-white/90">9 PM</div>
                    <Image src={logo}alt="" width={45} height={45}/>
                    <div className='text-lg text-white mt-0.5 font-medium'>27°</div>
                </div>
            </div>
        </div>
    )
}



