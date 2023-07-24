import Image from "next/image";
import FooterLink from "@/components/footerLink";

export default function Footer() {
    return (
        <>
            <div className={`bg-black h-10 space-x-10 pt-2`}>
                <FooterLink name={"CSConsulting"} href={"/"}/>
                <FooterLink name={"Services"} href={"#"}/>
                <FooterLink name={"Contact"} href={"#"}/>
                <FooterLink name={"Gallerie"} href={"#"}/>
            </div>
            <footer className="relative">
                <div className="absolute inset-x-0 bottom-0 bg-gray-100" />
                <div className="mx-auto">
                    <div className="relative shadow-xl lg:overflow-hidden">
                        <div className="absolute inset-0">
                            <Image
                                width={"3000"}
                                height={"500"}
                                className={"w-full"}
                                src={"/footerBack.jpg"}
                                alt="Coffee grinder"
                            />
                            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
                        </div>
                        <div className=" bg-transparent relative sm:px-6 sm:py-24 lg:py-10 lg:px-8">
                            <div className={`h-10 bg-transparent`}>
                                <p className={`text-blue-300 pt-2`}>Design de CSC | Propulsé par GAUS</p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
        )
}