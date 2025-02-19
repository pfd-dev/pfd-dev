'use client';
import { useThemeController } from '@/libs/hooks/useThemeController';

export default function About() {
  const { UI_COLORS } = useThemeController();

  return (
    <>
      <header>
        <h2 className="text-stone-100 text-5xl text-center uppercase font-bold">Sobre mi</h2>
      </header>

      <section className={`${UI_COLORS.container} rounded-xl p-4 space-y-4`}>
        <div>
          <p>
            ¡Hola! Bienvenido a mi página web. Soy Pablo Díaz, desarrollador web argentino especializado en la creación de páginas y aplicaciones web. <br />
            Aquí encontrarás mi portafolio digital, donde comparto detalles sobre mi trayectoria profesional, formación académica y proyectos.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Mi Trayectoria Profesional</h2>
          <p>
            A lo largo de mi carrera, he tenido la oportunidad de colaborar en diversos proyectos utilizando variedad de tecnologías. He trabajado con equipos multidisciplinarios en entornos dinámicos y desafiantes. <br />
            Mi experiencia se centra principalmente en el desarrollo frontend, creando y optimizando interfaces de usuario para páginas web y aplicaciones móviles.
            Cada proyecto me ha permitido perfeccionar mis habilidades y aprender nuevas herramientas.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Aspiraciones y Objetivos</h2>

          <p>
            Actualmente, estoy cursando la carrera de informática en la Universidad Nacional de Argentina, lo que complementa mi experiencia práctica con una sólida base académica.
            Aspiro a ampliar mis conocimientos en áreas como pruebas de software (QA), desarrollo de calidad y seguridad informática y la protección de datos personales. <br />
            Mi objetivo es convertirme en un profesional versátil, capaz de contribuir a diferentes aspectos del ciclo de desarrollo de software y aportar valor a los equipos.<br />
            Mi propósito con este sitio web es conectar con reclutadores y profesionales que busquen desarrolladores comprometidos y apasionados.
            Me motiva trabajar en proyectos que me desafíen y me permitan crecer, tanto a nivel técnico como personal, mientras contribuyo con el éxito del equipos y empresas.
          </p>
        </div>

        <p className="text-xl font-bold text-center uppercase">¡Gracias por visitar mi página!</p>
      </section>
    </>
  );
}
