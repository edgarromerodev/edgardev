import { Code2, Layout, Globe, Server } from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "Desarrollo Web",
      icon: <Layout className="w-10 h-10 text-[#2563eb] dark:text-[#60a5fa]" />,
      description:
        "Diseño y desarrollo de sitios web modernos y optimizados utilizando HTML, CSS y JavaScript.",
    },
    {
      name: "Aplicaciones Web",
      icon: <Code2 className="w-10 h-10 text-[#2563eb] dark:text-[#60a5fa]" />,
      description:
        "Desarrollo de aplicaciones web completas con ReactJS, NodeJS y bases de datos como MongoDB (MERN) y PostgreSQL (PERN), ofreciendo soluciones escalables y seguras.",
    },
    {
      name: "Plantillas Web",
      icon: <Globe className="w-10 h-10 text-[#2563eb] dark:text-[#60a5fa]" />,
      description:
        "Plantillas listas para usar, ideales para negocios, portafolios y emprendimientos digitales.",
    },
  ];

  return (
    <div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20 text-[#1f2937] dark:text-white"
    >
      {/* Encabezado */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-[#2563eb] dark:text-[#60a5fa]">
        Servicios que ofrezco
      </h4>
      <h2 className="text-center text-5xl font-Ovo text-[#1f2937] dark:text-white">
        Mis servicios
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-[#1f2937]/80 dark:text-gray-300">
        Ofrezco soluciones profesionales en desarrollo web y aplicaciones
        modernas con tecnologías actuales.
      </p>

      {/* Tarjetas de servicios */}
      <div className="grid grid-cols-auto gap-6 my-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 cursor-pointer
                                   hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]
                                   hover:bg-[#2563eb]/10 dark:hover:bg-white/10 hover:-translate-y-1 duration-500"
          >
            {service.icon}
            <h3 className="text-lg my-4 font-semibold text-[#1f2937] dark:text-white">
              {service.name}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
