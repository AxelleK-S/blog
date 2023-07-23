import Image from "next/image";

interface teamInfos {
    name: String,
    href: string,
    role: String
}

export default function TeamCard(props: teamInfos) {
    return (
        <div>
            <div className={`h-80 w-48 bg-gray-200 pt-10 pl-2 transition duration-300 hover:scale-110`}>
                <Image
                    src={(props.href == "")?"/next.svg":props.href}
                    alt="Vercel Logo"
                    className="rounded-full bg-white h-20 w-20 ml-10 mb-5"
                    width={100}
                    height={68}
                    priority
                />
                <p className={`text-black font-extrabold text-2xl`}>{props.name}</p>
                <p className={`text-slate-500`}>{props.role}</p>

            </div>
        </div>
    )
}