interface footerOptions {
    name: String,
    href: string
}

export default function FooterLink(props: footerOptions) {
    return (
        <a href={props.href} className={`text-white font-medium hover:text-green-500`}>{props.name}</a>
    )
}