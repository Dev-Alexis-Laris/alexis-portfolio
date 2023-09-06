import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            Mis <span className="text-red">Skills</span> y <span className="text-red">Tecnologías</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Mis habilidades son el pilar de mi carrera profesional. Han sido cultivadas a lo largo de diversas experiencias y desafíos, permitiéndome abordar situaciones complejas con confianza y éxito.<br/><br/>Representan mi compromiso con la mejora continua y el logro de resultados excepcionales en cada proyecto.
          </p>
        </motion.div>

        <motion.div className="mt-16 md:mt-0" initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { delay: 0.4, opacity: 0, x: 50 },
            visible: { delay: 0.4, opacity: 1, x: 0 }
          }}>
          {isAboveMediumScreen ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-yellow before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 rounded-xl"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10 rounded-xl" src="assets/skills-image.png" />
          )}
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Trabajo en Equipo
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
          </div>
          <p className="mt-5">
            Soy un colaborador comprometido y efectivo que disfruta trabajando en equipo. Creo en la importancia de la comunicación abierta y la cooperación para lograr objetivos comunes.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Liderazgo
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Soy un líder comprometido que guía a los equipos hacia el éxito al fomentar la colaboración y la innovación. Creo en empoderar a los miembros del equipo para alcanzar su máximo potencial y lograr resultados excepcionales.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Iniciativa
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Soy un innovador incansable. Siempre busco oportunidades para impulsar mejoras y resuelvo desafíos con creatividad y decisión. Mi capacidad para tomar la iniciativa es un motor constante de logros.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;