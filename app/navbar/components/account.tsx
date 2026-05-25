import Detailnavig from "./detailnavig";

export default function Account() {
    return (
        <div className="flex flex-col gap-2 w-80">
            <p className="text-xl">Main Menu</p>
            <Detailnavig img="/profile.svg" label="Profile"/>
            <Detailnavig img="/settings.svg" label="Settings"/>
        </div>
    )
}