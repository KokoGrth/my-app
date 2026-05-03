export default function learnpage() {
    return (
    <section className="bg-black flex justify-center items-center w-screen h-screen">
    <section className="bg-gray-200 flex flex-col gap-4 w-280 h-190 items-center relative justify-center">

        <div className="flex gap-4">

            <div className="bg-blue-100 p-8 h-72 w-110 rounded-4xl flex flex-col justify-between text-blue-900">
                <div className="flex gap-4">
                    <img src="/palette.svg" alt="design" />
                    <p className="font-bold">Design</p>
                </div>
                <div>
                    <p className="text-3xl font-bold">Adobe Photoshop</p>
                    <div className="flex justify-between items-center">
                        <p>in 3 days</p>
                        <div className="flex">
                            <img src="/avatar1.png" alt="" className="w-7 h-7 rounded-full border-2 border-blue-100" />
                            <img src="/avatar2.png" alt="" className="w-7 h-7 rounded-full border-2 border-blue-100 -ml-2" />
                            <img src="/avatar3.png" alt="" className="w-7 h-7 rounded-full border-2 border-blue-100 -ml-2" />
                            <img src="/+9.png" alt="" className="w-7 h-7 rounded-full border-2 border-blue-100 -ml-2" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-green-100 p-8 h-72 w-110 rounded-4xl flex flex-col justify-between text-green-900">
                <div className="flex justify-between">
                    <div className= "flex gap-4">
                    <img src="/terminal.svg" alt="terminal" />
                    <p className="font-bold">AI</p>
                    </div>
                    <img src="/star.svg" alt="star" className="w-3 h-3" />
                </div>
                <div>
                    <p className="text-3xl font-bold">DALL·E 2, Midjourney, Stable Diffusion</p>
                    <div className="flex justify-between items-center">
                        <p>in 5 days</p>
                        <div className="flex">
                            <img src="/avatar1.png" alt="" className="w-7 h-7 rounded-full border-2 border-green-100" />
                            <img src="/avatar2.png" alt="" className="w-7 h-7 rounded-full border-2 border-green-100 -ml-2" />
                            <img src="/avatar3.png" alt="" className="w-7 h-7 rounded-full border-2 border-green-100 -ml-2" />
                            <img src="/+3.png" alt="" className="w-7 h-7 rounded-full border-2 border-green-100 -ml-2" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="flex gap-4">

            <div className="bg-purple-300 p-8 h-52 w-72 rounded-4xl flex flex-col justify-between text-blue-950">
                <div className="flex gap-4">
                    <img src="/palette.svg" alt="design" />
                    <p className="font-bold">Design</p>
                </div>
                <div>
                    <p className="text-3xl font-bold">Figma</p>
                    <p>8 hours ago</p>
                </div>
            </div>

            <div className="bg-orange-300 p-8 h-52 w-72 rounded-4xl flex flex-col justify-between text-orange-800">
                <div className="flex gap-4">
                    <img src="/code.svg" alt="coding" />
                    <p className="font-bold">Coding</p>
                </div>
                <div>
                    <p className="text-3xl font-bold">Python</p>
                    <p>2 days ago</p>
                </div>
            </div>

            <div className="bg-pink-300 p-8 h-52 w-72 rounded-4xl flex flex-col justify-between text-pink-800">
                <div className="flex gap-4">
                    <img src="/palette.svg" alt="design" />
                    <p className="font-bold">Design</p>
                </div>
                <div>
                    <p className="text-3xl font-bold">Sketch</p>
                    <p>4 days ago</p>
                </div>
            </div>
        </div>
        <p className="flex absolute bottom-8 right-8 text-gray-400">Day 020 / 365</p>
        <img src="/logo.svg" alt="logo" className="flex absolute top-12 left-10 h-10 w-10"/>
    </section>
    </section>
    );
}