import Image from "next/image";
import NavButton from "@/components/navButton";

export default function NavBar() {
    return (
        <div className={` sticky h-20 bg-white items-center justify-between  text-sm lg:flex`}>
            <a className={``} href={"/"}>
                <Image
                    src="/logo.png"
                    alt="Vercel Logo"
                    className="ml-10"
                    width={40}
                    height={10}
                    priority
                />
            </a>
            <div className={`space-x-5 mr-10 flex text-black`}>
                <a href={"/"} className={`transition-colors duration-300 hover:text-green-500 text-lg`}>CSConsuling</a>
                <a href={"/services"} className={`transition-colors duration-300 hover:text-green-500 text-lg`}>Services</a>
                <a href={"/contact"} className={`transition-colors duration-300 hover:text-green-500 text-lg`}>Contact</a>
                <a href={"/gallerie"} className={`transition-colors duration-300 hover:text-green-500 text-lg`}>Gallerie</a>
                {/*<NavButton name={"CSConsulting"} href={"/"}/>*/}
                {/*<NavButton name={"Services"} href={"/services"}/>*/}
                {/*<NavButton name={"Contact"} href={"/contact"}/>*/}
                {/*<NavButton name={"Gallerie"} href={"/gallerie"}/>*/}
            </div>
        </div>
    )
}