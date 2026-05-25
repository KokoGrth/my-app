import Judul from "../test/components/Header"
import Header from "./components/header"

export default function navpage () {
    return (
        <section className= "h-screen w-screen flex bg-[#1e2734]">
            <div className= "h-screen w-80 bg-[#151a2c] text-white flex flex-col gap-10 p-10">
                <p className="text-3xl font-bold">CodingLab</p>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 w-80">
                        <div className ="flex items-center p-2 gap-4">
                            <img src="/dashboard.svg" className="w-7 h-7 invert"/>
                            <p className="text-lg">Dashboard</p>
                        </div>
                        <div className ="flex items-center p-2 gap-4">
                            <img src="/Overview.svg" className="w-7 h-7 invert"/>
                            <p className="text-lg">Overview</p>
                        </div>
                        <div className ="flex items-center p-2 gap-4">
                            <img src="/chart.svg" className="w-7 h-7 invert"/>
                            <p className="text-lg">Analytic</p>
                        </div>
                    </div>
                   <div className="flex flex-col gap-2 w-80">
                        <div className ="flex items-center p-2 gap-4">
                            <img src="/file.svg" className="w-7 h-7 invert"/>
                            <p className="text-lg">Project</p>
                        </div>
                        <div className ="flex items-center p-2 gap-4">
                            <img src="/Group.svg" className="w-7 h-7 invert"/>
                            <p className="text-lg">Groups</p>
                        </div>
                        <div className ="flex items-center p-2 gap-4">
                            <img src="/flag.svg" className="w-7 h-7 invert"/>
                            <p className="text-lg">Reports</p>
                        </div>
                    </div>
                   <div className="flex flex-col gap-2 w-80">
                        <div className ="flex items-center p-2 gap-4">
                            <img src="/user.svg" className="w-7 h-7 invert"/>
                            <p className="text-lg">Profile</p>
                        </div>
                        <div className ="flex items-center p-2 gap-4">
                            <img src="/Settings.svg" className="w-7 h-7 invert"/>
                            <p className="text-lg">Settings</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}