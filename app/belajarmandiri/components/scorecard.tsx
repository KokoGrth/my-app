export default function ScoreCard () {
    return (
        <div className="h-25 w-60 flex flex-col justify-between bg-[#121327] rounded-3xl border-2 border-gray-800 p-3 gap-2">
            <div className="flex gap-2 ">
                <img src="/chart.svg" className="w-5 h-5 invert"/>
                <p className="text-base text-white">Life Score</p>
            </div>
            <div className="flex flex-col">
                <p className="text-lg font-bold text-white">92.5</p>
                <p className="text-base text-gray-300">Above Average</p>
            </div>
        </div>
    )
}