export default function Detailnavig ({
    img,
    label,
}: {
    img: string;
    label: string;
}) {
    return (
        <div className ="flex items-center p-2 gap-4">
            <img src={img} className="w-7 h-7 invert"/>
            <p className="text-lg">{label}</p>
        </div>
    )
}