"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function TemperatureToggle(){
    const [isCelcius, setIsCelius ]= useState<boolean>(true);

    console.log(isCelcius)
    return (
        <div className="  flex items-center text-white relative bg-[#705AE7]/70 rounded-full font-k2d cursor-pointer">
            <div className="rounded-full w-8 text-center py-1 px-2 z-10  text-xs" onClick={() => {setIsCelius(true)}}>°C</div>
            <div className="rounded-full w-8 text-center py-1 px-2 text-xs z-10" onClick={() => {setIsCelius(false)}}>°F</div>
            <motion.div
            animate={{ left: isCelcius ? '0%' : '50%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute w-6/12 h-full bg-[#705AE7]/70 rounded-full"
            />

        </div>
    )
}