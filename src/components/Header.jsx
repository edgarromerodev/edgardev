export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 text-[#1f2937] dark:text-white">

            {/* Imagen de perfil */}
            <img 
                src="./assets/profile-img.png" 
                alt="Edgar Romero" 
                className="rounded-full w-32 border-4 border-[#2563eb]" 
            />

            {/* Saludo */}
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo text-[#2563eb] dark:text-[#60a5fa]">
                ¡Hola! Soy Edgar Romero
                <img src="./assets/hand-icon.png" alt="mano saludando" className="w-6 mb-1" />
            </h3>

            {/* Descripción principal */}
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                Desarrollador web con sede en Guatemala.
            </h1>

            {/* Información adicional */}
            <p className="max-w-2xl mx-auto font-Ovo text-[#1f2937]/80 dark:text-gray-300">
                Inicié en el mundo de la programación a finales de 2023. Soy el creador de{" "}
                <a 
                    href="https://www.edukuk.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#2563eb] font-semibold hover:underline"
                >
                    edukuk.com
                </a>{" "}
                y creador de contenido apasionado por el desarrollo web.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a
                    href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-[#2563eb] text-white flex items-center gap-2 hover:bg-[#1d4ed8] transition dark:border-transparent"
                >
                    Contáctame <img src="./assets/right-arrow-white.png" alt="flecha derecha" className="w-4" />
                </a>

                <a
                    href="#work"
                    className="px-10 py-2.5 rounded-full border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]/10 flex items-center gap-2 transition dark:text-white dark:border-white/25 dark:hover:bg-white/10"
                >
                    Ver portafolio <img src="./assets/right-arrow-bold.png" alt="flecha derecha" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}
