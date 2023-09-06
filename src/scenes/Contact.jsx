import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_mdi9607', 'template_ema372i', event.target, 'kC7ZAyhECiAzUl1OD')
      .then(response => {
        // Mostrar notificación de éxito
        toast.success('Email enviado exitosamente!');
      })
      .catch(error => {
        // Mostrar notificación de error
        toast.error('Error al enviar el email!');
      });
  };

  return (
    <section id="contacto" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">Contáctame</span> y comencemos!
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="assets/contact-image.png" alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            onSubmit={sendEmail}
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="Tú Nombre Completo"
              name="user_name"
              required
            />

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="Tú Correo Electrónico"
              required
              name="user_email"
            />

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              placeholder="Tú Mensaje"
              rows="4"
              cols="50"
              required
              name="user_message"
            />

            <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              ENVAR MENSAJE
            </button>
          </form>
        </motion.div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default Contact;