import NavButton from "@/components/navButton";
import WelcomeWords from "@/components/welcomeWords";
import DreamPart from "@/components/dreamPart";
import TeamCard from "@/components/teamCard";
import FooterLink from "@/components/footerLink";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Home() {
    return (
    <div className={`bg-white`}>
        <Header/>
        <div className="text-center bg-white my-10">
            <p
                className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
            >
                Crafted by us, for them
            </p>
        </div>
        <div className={`bg-white px-40 pt-10 lg:flex space-x-40 pb-10`}>
            <div className={`mx-40`}>
                <WelcomeWords title={"CONSEIL"}
                              description={"Présence au besoin de nos avocats pour garantir vos droits et vous protéger tout au long de votre carrière, réaliser et vérifier les"}
                              href={""}
                />
                <WelcomeWords title={"ACCOMPAGNEMENT"}
                              description={"Nous nous engageons à établir pour chaque joueur un plan de carrière personnalisé en fonction de ses qualités, de la vision"}
                              href={""}
                />

            </div>
            <div className={``}>
                <WelcomeWords title={"SCOUSTING"}
                              description={"La mise en relation d’un joueur (sportif) avec un club en vue de conclure un contrat de travail de joueur contre rémunération est soumise à la "}
                              href={""}
                />
                <WelcomeWords title={"PRESTATION DE SERVICE EN RELATION AVEC LE SPORT"}
                              description={"Nous avons une équipe dynamique et disponible pour toutes vos prestations de services en relation avec le sp"}
                              href={""}
                />
            </div>
        </div>
        <div className={`bg-white border-white border-t-2 pb-20`}>
            <div className={`pt-20 pl-40 w-max-96 bg-gray-200 space-y-4 px-10 mx-20 mt-20`}>
                <p className={`text-green-600 font-medium`}>BIENVENUE CHEZ CSC</p>
                <p className={`text-black text-4xl font-medium`}>CONSEIL</p>
                <p className={`text-black text-4xl font-medium`}>& ACCOMPAGNEMENT</p>
                <p className={`text-slate-500`}> Le cabinet Chedjou Sports Consulting, basé à Douala au Cameroun, est spécialisé dans l’accompagnement et le management de carrière des joueurs de football. Notre situation nous permet d’avoir des accès direct auprès de l’ensemble des grands clubs Européens. </p>
                <NavButton name={"ACCEDER A UN ACCOMPAGNEMENT"} href={""}/>
                <div className={`h-10 text-black`}></div>
            </div>
        </div>
        <div className={`bg-white border-white border-t-2 pb-20 px-20`}>
            <DreamPart title={"LESSONS"} subtitle={"LE RÊVE EST PERMIS"} href={""} buttonText={"DREAM BIG AND MAKE IT HAPPEN"}/>
            <DreamPart title={"TRAINING"} subtitle={"LA REALISATION DU RÊVE"} href={""} buttonText={"CSC"}/>
            <DreamPart title={"CAMPS"} subtitle={"LA PERSÉVÉRANCE DU RÊVE"} href={""} buttonText={"FEV 18, 2023"}/>
        </div>
        <div className={`bg-white border-white border-t-2 pt-10 pb-10`}>
            <div className={`items-center justify-between lg:flex mb-10`}>
                <div></div>
                <p className={`text-slate-500 text-4xl font-bold`}>EQUIPE DIRIGEANTE</p>
                <div></div>
            </div>
            <div className={`items-center justify-between lg:flex pl-10 pr-10`}>
                <TeamCard name={"FOYANG Etienne Junior"} href={""} role={"Software Developer"}/>
                <TeamCard name={"FOYANG Etienne Junior"} href={""} role={"Software Engineer"}/>
                <TeamCard name={"FOYANG Etienne Junior"} href={""} role={"FullStack Developer"}/>
            </div>
            <div className={`mt-32 mb-32`}>
                <div className={`lg:flex justify-between`}>
                    <div></div>
                    <div>
                        <p className={`text-green-500`}>Our blog</p>
                        <p className={`text-black text-3xl font-bold`}>NEWS & UPDATES</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}