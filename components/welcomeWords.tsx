interface option {
    title: String,
    description: String,
    href: String
}

export default function WelcomeWords(props: option) {
    return (
        <div className={`w-40 justify-items-center space-y-4 mb-32`}>
            <p className={`text-black font-medium text-2xl`}>{props.title}</p>
            <p className={`text-slate-500 font-medium`}>
                {props.description}
            </p>
            <button className={`transition-colors duration-150 rounded-xl h-14 w-40 text-black border-2 border-black font-medium hover:bg-black hover:text-white`}>EN SAVOIR PLUS</button>
        </div>
    )
}