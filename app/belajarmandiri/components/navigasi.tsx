import DetailNavi from "./detailnavi";

export default function Navigasi () {
    return (
        <div className="flex flex-col gap-4 text-white">
            <DetailNavi img="/home.svg" label = "Home" />
            <DetailNavi img="/barbell.svg" label = "Fitness" />
            <DetailNavi img="/mosque.svg" label = "Prayer" />
            <DetailNavi img="/brain.svg" label = "Study" />
            <DetailNavi img="/heart.svg" label = "Daily Basics" />
            <DetailNavi img="/chart.svg" label = "Analytics" />
            <DetailNavi img="/book.svg" label = "Journal" />
        </div>
    )
}