import {
  Code2,
  GraduationCap,
  FolderCode,
  Atom,
  FileCode2,
  Github,
  GitBranch,
  Server,
} from "lucide-react";

export default function About() {
  const data = [
    {
      name: "Lenguajes",
      icon: <Code2 className="w-7 h-7 text-[#2563eb]" />,
      description: "HTML, CSS, JavaScript, React y Node.js",
    },
    {
      name: "Educación",
      icon: <GraduationCap className="w-7 h-7 text-[#2563eb]" />,
      description:
        " Formación continua en desarrollo web a través de Platzi y otros recursos en línea.",
    },
    {
      name: "Proyectos",
      icon: <FolderCode className="w-7 h-7 text-[#2563eb]" />,
      description:
        "He desarrollado más de 5 proyectos web con enfoque educativo y empresarial.",
    },
  ];

  const tools = [
    { name: "HTML", icon: <FileCode2 className="w-6 h-6 text-[#e34c26]" /> },
    { name: "Tailwind", icon: <Code2 className="w-6 h-6 text-[#38bdf8]" /> },
    { name: "JavaScript", icon: <Code2 className="w-6 h-6 text-[#f7df1e]" /> },
    { name: "React", icon: <Atom className="w-6 h-6 text-[#61dafb]" /> },
    { name: "Node.js", icon: <Server className="w-6 h-6 text-[#83cd29]" /> },
    { name: "Git", icon: <GitBranch className="w-6 h-6 text-[#f1502f]" /> },
  ];

  return (
    <div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 text-[#1f2937] dark:text-white"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo text-[#2563eb] dark:text-[#60a5fa]">
        Introducción
      </h4>
      <h2 className="text-center text-5xl font-Ovo text-[#1f2937] dark:text-white">
        Sobre mí
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Imagen de perfil */}
        <div className="max-w-max mx-auto relative">
          <img
            src="./assets/user-image.png"
            alt="Edgar Romero"
            className="w-64 sm:w-80 rounded-3xl max-w-none border-4 border-[#2563eb]/20 dark:border-[#2563eb]/40"
          />

          <div className="bg-white dark:bg-[#1f2937] w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(37,99,235,0.2)] flex items-center justify-center">
            <img
              src="./assets/circular-text.png"
              alt=""
              className="w-full animate-spin_slow dark:invert"
            />
            <Atom className="w-8 h-8 absolute text-[#2563eb]" />
          </div>
        </div>

        {/* Descripción */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo text-[#1f2937]/80 dark:text-gray-300">
            Soy{" "}
            <span className="text-[#2563eb] font-semibold">Edgar Romero</span>,
            desarrollador de páginas web de Guatemala. Inicié en el mundo de la
            programación a finales de 2023, creando proyectos con JavaScript,
            React y Node.js. También soy el creador de{" "}
            <a
              href="https://www.edukuk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563eb] font-semibold hover:underline"
            >
              edukuk.com
            </a>
            , una plataforma educativa enfocada en compartir conocimiento de
            forma práctica y accesible.
          </p>

          {/* Secciones de información */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {data.map((item) => (
              <li
                key={item.name}
                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-[#2563eb]/10 dark:hover:bg-white/10 hover:-translate-y-1 duration-500"
              >
                {item.icon}
                <h3 className="my-4 font-semibold text-[#1f2937] dark:text-white">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          {/* Herramientas */}
          <h4 className="my-6 font-Ovo text-[#2563eb] dark:text-[#60a5fa]">
            Herramientas que utilizo
          </h4>
          <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:bg-[#2563eb]/10 dark:hover:bg-white/10"
                title={tool.name}
              >
                {tool.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
