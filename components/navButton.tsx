import Link from "next/link";

interface buttonBreak {
    name: String
    href: string
}
export default function NavButton(props: buttonBreak) {
    return (
        <button className={`rounded-xl transition-colors duration-300 bg-white px-7 text-green-500 h-14 border-black border-2 hover:bg-black hover:text-white hover:border-white font-medium`} ><a href={props.href}>{props.name}</a></button>
    )
}