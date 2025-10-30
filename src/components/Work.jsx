import React from "react";
import { ExternalLink } from "lucide-react";

export default function Work() {

  const work = [
        {
            name: 'Comercio Electrónico',
            icon: './assets/ecommerce.png',
            description: 'Diseño Web',
            demo: 'https://plantilla-ecommerce-six.vercel.app',
        },

                {
            name: 'Academia en línea',
            icon: './assets/academia.png',
            description: 'Aplicación Móvil',
            demo: 'https://academy-six-iota.vercel.app',
        },
        {
            name: 'Sitio de fotografía',
            icon: './assets/edukukgt.png',
            description: 'Diseño Web',
            demo: 'https://edukukgt.vercel.app',
        },
        {
            name: 'Edukuk',
            icon: './assets/code.png',
            description: 'Diseño de interfaz',
            demo: 'https://plataforma-xi-two.vercel.app',
        }

  ];

  const [stopScroll, setStopScroll] = React.useState(false);

  return (
    <>

      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

            `}</style>

      <div
        id="work"
        className="w-full px-[12%] py-10 scroll-mt-20 text-[#1f2937] dark:text-white"
      >
        <h4 className="text-center mb-2 text-lg font-Ovo text-[#2563eb] dark:text-[#60a5fa]">
          Mi portafolio
        </h4>
        <h2 className="text-center text-5xl font-Ovo text-[#1f2937] dark:text-white">
          Proyectos Destacados
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-[#1f2937]/80 dark:text-gray-300">
          Bienvenido a mi portafolio de desarrollo web. Explora una colección de
          proyectos que reflejan mi experiencia y crecimiento en el desarrollo
          front-end.
        </p>

        {/* Carrusel horizontal */}
        <div
          className="overflow-hidden w-full relative max-w-6xl mx-auto"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
        >
          <div
            className="marquee-inner flex w-fit"
            style={{
              animationPlayState: stopScroll ? "paused" : "running",
              animationDuration: work.length * 2500 + "ms"
            }}
          >
            <div className="flex">
              {[...work, ...work].map((project, index) => (
                <div
                  key={index}
                  className="w-56 mx-4 h-[20rem] relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  style={{
                    backgroundImage: `url(${project.icon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-full bg-black/20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-4">
                    <h3 className="font-semibold text-lg text-white text-center">
                      {project.name}
                    </h3>
                    <p className="text-sm text-white/80 text-center">
                      {project.description}
                    </p>

                    {/* Icono de demo */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 p-2 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] transition"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradientes para los bordes */}
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-[#0f172a] to-transparent" />
          <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-[#0f172a] to-transparent" />
        </div>
      </div>
    </>
  );
}
