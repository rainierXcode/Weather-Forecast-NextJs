import TemperatureToggle from "@/components/TemperatureToogle"
import Forecast from "@/components/gridContainers/Forecast"

export default function RightSide(){
    return(
        <div className="min-h-screen px-4 py-4 ml-[300px]">
            <div className="flex items-center justify-end">
                <TemperatureToggle />
            </div>

            <Forecast />
        </div>
    )
}