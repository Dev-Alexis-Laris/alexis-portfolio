import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Project = ({ title }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return(
        <motion.div
            variants={projectVariant} className="relative"
        >
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    In Process...
                </p>
            </div>
            <img src={`/assets/${projectTitle}.jpeg`} alt={projectTitle}/>
        </motion.div>
    )
}

const Projects = () => {

    return (
        <section id="proyectos" className="pt-48 pb-48">

            {/* HEADINGS */}

            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        Mis <span className="text-red">Proyectos</span>
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>

                <p className="mt-10 mb-10">
                Estos son mis proyectos: una colección de empeños y esfuerzos que representan mi dedicación, creatividad y pasión en distintas áreas. Cada uno de ellos es una expresión de mi compromiso por alcanzar metas y materializar ideas, mostrando mi constante búsqueda de innovación y crecimiento.
                </p>
            </motion.div>

            {/* PROJECTS */}

            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >

                    {/* ROW 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        HERMOSAS INTERFACES DE USUARIO
                    </div>

                    <Project title="Project 1"/>
                    <Project title="Project 2"/>

                    {/* ROW 2 */}

                    <Project title="Project 3"/>
                    <Project title="Project 4"/>
                    <Project title="Project 5"/>

                    {/* ROW 2 */}
                    <Project title="Project 6"/>
                    <Project title="Project 7"/>

                    <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        EXPERIENCIA DE USUARIO FLUIDA
                    </div>

                </motion.div>

            </div>


        </section>
    )
}

export default Projects;