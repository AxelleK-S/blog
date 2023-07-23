import NavButton from "@/components/navButton";

interface dreamPartProps {
    title: String,
    subtitle: String,
    href: String,
    buttonText: String
}
export default function DreamPart(props: dreamPartProps) {
    return (
        <div className={`mt-20`}>
            <p className={`text-green-600 font-medium`}>{props.title}</p>
            <p className={`text-black font-medium text-3xl mb-5`}>{props.subtitle}</p>
            <NavButton name={props.buttonText}/>
        </div>
    )
}