/*
export default function learnpage() {
    return (
    <div>
        <div>
            <img src="/paint.svg" alt="design" />
            <p>Design</p>
        </div>
    <div>
        <p>Figma</p>
        <p>8 Hours</p>
    </div>
    </div>
);
}
*/

export default function learnpage() {
    return (
    <section className="h-screen bg-gray-200 flex gap-4 p-8"> 
    <div className = "bg-purple-300 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
        <div className = "flex gap-4" >
            <img src="/paint.svg" alt="design" />
            <p className="font-bold">Design</p>
        </div>
        <div>
            <p className="text-4xl font-bold">Figma</p>
            <p>8 Hours</p>
        </div>
    </div>
    <div className = "bg-orange-300 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-orange-800">
        <div className = "flex gap-4" >
            <img src="/paint.svg" alt="design" />
            <p className="font-bold">Codding</p>
        </div>
        <div>
            <p className="text-4xl font-bold">Python</p>
            <p>2 Hours</p>
        </div>
    </div>
    <div className = "bg-pink-300 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-pink-800">
        <div className = "flex gap-4" >
            <img src="/paint.svg" alt="design" />
            <p className="font-bold">Design</p>
        </div>
        <div>
            <p className="text-4xl font-bold">Sketch</p>
            <p>4 Days</p>
        </div>
    </div>
    </section>
);
}


