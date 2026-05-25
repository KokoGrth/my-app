import Navigasi from "./components/navigasi"
import ScoreCard from "./components/scorecard"
import WebHeader from "./components/webheader"

export default function learnpage () {
    return (
        <section className = "h-screen w-screen flex bg-[#1e2735]">
            <div className = "h-screen w-75 flex flex-col justify-between rounded-2xl bg-[#0c0c12] border-2 border-gray-800 p-6">
                <div className="flex flex-col gap-10">
                    <WebHeader />
                    <Navigasi />
                </div>
                <ScoreCard/>
            </div>
        </section>
    )
}