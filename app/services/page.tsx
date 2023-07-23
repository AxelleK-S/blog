import Image from "next/image";
import WelcomeWords from "@/components/welcomeWords";
import Footer from "@/components/footer";

export default function Service() {
    return (
        <div className={`bg-white`}>
            <header className="relative mb-20">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
                <div className="mx-auto">
                    <div className="relative shadow-xl sm:overflow-hidden">
                        <div className="absolute inset-0">
                            <Image
                                priority
                                fill
                                className="h-full w-full object-cover"
                                src={"/3B7A8549.jpg"}
                                alt="Coffee grinder"
                            />
                            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl  font-semibold uppercase tracking-wide text-green-600">
                                CHEDJOU SPORTS CONSULTING
                            </p>
                            <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
                                <span className="block text-white">ABOUT</span>
                                <span className="block text-green-500">CSC</span>
                            </h1>

                            <div className="mx-auto mt-10 max-w-xs sm:flex sm:max-w-none sm:justify-center">
                                <button
                                    className="flex items-center justify-center transition duration-300 rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-600 shadow-sm hover:bg-green-100 sm:px-8"
                                    // onClick={scrollHandler}
                                >
                                    Contactez-nous
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`bg-white pt-10 pl-14 pr-14 items-center justify-center lg:flex border-white border-t-2 space-x-10 mb-20`}>
                <div className={`text-slate-500`}>
                    <p className={`text-black text-3xl font-bold w-16 mb-8`}>CHEDJOU SPORTS CONSULTING</p>
                    <p className={`mb-4 justify-center`}>Le cabinet Chedjou Sports Consulting, basé à Douala au Cameroun, est spécialisé dans conseil et l’accompagnement de carrière des joueurs de football. Notre situation nous permet d’avoir des accès directs auprès de l’ensemble des grands clubs Européens.</p>
                    <p className={``}>Chedjou Sports Consulting Sport, c’est avant tout un travail d’équipe. L’agence apporte une double compétence dans le domaine du football : La partie contractuelle, négociation, gestion de carrière et marketing d’un côté, la partie sportive, développement des performances et le suivi en club l’autre côté. Le joueur lui-même vient compléter l’équipe afin de former un noyau solide pour prendre en main son avenir. Chedjou Sports Consulting va bien au-delà du simple rôle conseil et propose un accompagnement complet du sportif.</p>
                </div>
                <div>
                    <div className={`bg-white rounded-2xl shadow-xl text-black w-96 px-5 py-5 mb-10`}>
                        <p className={`text-green-500`}>Mission</p>
                        <p className={`text-black font-bold`}>OUR MISSION & VISION</p>
                        <p>Elle consiste  de faire émerger de nouveaux talents et de les accompagner dans l'évolution de leur carrière</p>
                    </div>
                    <div className={`bg-white rounded-2xl shadow-xl text-black w-96 px-5 py-5`}>
                        <p className={`text-green-500`}>Our Story</p>
                        <p className={`text-black font-bold`}>HOW WE GOT STARTED</p>
                        <p>Elle consiste  de faire émerger de nouveaux talents et de les accompagner dans l'évolution de leur carrière</p>
                    </div>
                </div>
            </div>
            <div className={"justify-center items-center lg:flex space-x-28 mb-20"}>
                <Image
                    src={"/3B7A8776.jpg"}
                    alt={"chedjou_interview"}
                    width={"600"}
                    height={"100"}
                />
                <div>
                    <h1 className={`text-slate-500 font-bold text-2xl`}>WHY CHOOSE US</h1>
                    <p className={`text-black w-96`}>Nous vous accompagnons en toute sécurité et assurons un bon avenir professionnel tout au long de votre carrière. Notre raison d’être est de vous permettre de réaliser votre rêve sportif.</p>
                </div>
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
            <Footer/>
        </div>
    )
}