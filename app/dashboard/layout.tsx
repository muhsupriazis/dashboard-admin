import Navigation from "@/components/ui/navigation"
import InputSearch from "@/components/ui/search"
import Image from "next/image"

interface Props {
    children: React.ReactNode
}

export default function DashboardLayout({children}: Props){
    return <>
        <header className="px-10 py-2 flex justify-between border-b-[1px] border-solid items-center">
            <div>
                <InputSearch placeholder="Type Title Here.."/>
            </div>
            <div className="flex gap-4 items-center">
                <Navigation url="dashboard/write">
                    Write
                </Navigation>
                <Navigation url="dashboard">
                    Menage
                </Navigation>
                <Navigation url="dashboard/message">
                    Message
                </Navigation>
                <div className="w-[45px] rounded-full overflow-hidden">
                    <Image src={'/profile.jpg'} alt="Muh Supri Azis" width={500}  height={500}/>
                </div>
            </div>
        </header>
        <main className="px-10 py-2">
            {children}
        </main>
    </>
}