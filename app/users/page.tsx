export default function () {
    return (
        <section className="h-screen bg-gray-400 flex justify-center items-center">
            <div className="bg-white h-200 w-210 p-12 gap-10 flex flex-col rounded-4xl text-black">
                <div className="flex justify-between gap-4">
                    <p className="text-4xl"> Client details </p>
                    <img src="/x.svg" className="h-8 w-8"/>
                </div>
                <div className="flex gap-4">
                    <img src="/avatar2.png" className="w-20 h-20"/>
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl"> Cornelius Greenfelder</p>
                        <div className="bg-green-300 text-green-950 gap-2 p-1 w-28 h-6 rounded-full flex justify betweem items-center">
                            <img src="/medal.svg" className= "w-5 h-5"/>
                            <p className="text-1xl font-bold">Verified</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-300 rounded-4xl h-60 w-185 flex flex-col p-8 justify-between">
                    <p className="text-3xl font-bold text-black"> Project</p>
                    <div className="flex gap-70">
                        <div className="flex flex-col gap-2">
                            <div className= "flex gap-2">
                                <img src="/hourglass.svg" className="w-7 h-7"/>
                                <p className="text-2xl text-gray-700"> Ongoing</p>
                            </div>
                            <p className="text-3xl text-black">2 ($3.8k)</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className= "flex gap-2">
                            <img src="/verified.svg" className="w-7 h-7"/>
                            <p className="text-2xl text-gray-700"> Completed</p>
                            </div>
                            <p className="text-3xl text-black">25 ($54k)</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-3xl">Location</p>
                    <p className="text-2xl text-gray-600">United States, New York</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-3xl">With Us</p>
                    <p className="text-2xl text-gray-600">6 Jan 2024</p>
                </div>
                <div className="flex gap-2 justify-between">
                    <img src="/dots.svg" className="bg-gray-300 rounded-full w-20 h-20"/>
                    <div className="bg-blue-700 rounded-full gap-2 p-4 w-180 h-20 flex items-center justify-center">
                        <img src="/mail.svg" className="w-8 h-8"/>
                        <p className="text-3xl text-white"> Message
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}