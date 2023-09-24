import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaquery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaquery("(min-width: 1060px)");

    return (
        <section id="inicio" className="md:flex md:justify-between md:items-center md:h-full gap-11 py-10">

            {/* IMAGE SECTION*/}

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { delay: 0.4, opacity: 0, x: 50 },
                    visible: { delay: 0.4, opacity: 1, x: 0 }
                }} className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-3">
                {isAboveMediumScreens ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-yellow before:z-[-1]">
                        <img className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600]"
                            alt="profile"
                            src="assets/profile-image.png"
                        />
                    </div>
                ) : (
                    <img className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600]:"
                        alt="profile"
                        src="assets/profile-image.png"
                    />
                )}
            </motion.div>

            {/* MAIN SECTION */}

            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* HEADINGS */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">
                        Alexis {""}
                        <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
                            Laris
                        </span>
                    </p>

                    <p className="mt-10 mb-7 text-small text-center md:text-start">
                    Sooooy un apasionado estudiante de ingeniería en desarrollo y gestión de software con un fuerte compromiso de aprendizaje constante. <br /> <br /> Mi experiencia abarca la gestión de bases de datos, desarrollo web y la utilización de diversos frameworks. Estas competencias me capacitan para abordar proyectos con solidez técnica y eficacia.
                    </p>
                </motion.div>


                {/* CALL TO ACTIONS */}

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >

                    <AnchorLink className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500" onClick={() => setSelectedPage("contacto")}
                        href="#contacto"
                    >
                        Contáctame

                    </AnchorLink>

                    <a className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5" href='./Alexis_Laris_CV.pdf' download={''}
                        
                    >
                        <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10"
                        >
                            Descarga mi CV...

                        </div>

                    </a>

                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>


                    <SocialMediaIcons />

                </motion.div>

            </div>
        </section>
    )
}

export default Landing;