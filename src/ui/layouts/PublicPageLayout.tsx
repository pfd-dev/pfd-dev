import Link from 'next/link';
// Hooks
import { useClipboard, useThemeController } from '@/libs/hooks';
// Global
import { SidebarPortal } from '@/components/customized';
// Icons
import { GitHubIcon, GmailIcon, LinkedInIcon } from '@/utils/icons';
import { IconDeployedCode, IconGuardian, IconHome, IconLabProfile, IconSportsEsports } from '@/utils/IconsGoogle';

const links = [
  { url: 'home', label: 'inicio', icon: <IconHome /> },
  { url: 'resume', label: 'curriculum', icon: <IconLabProfile /> },
  { url: 'projects', label: 'proyectos', icon: <IconDeployedCode /> },
  { url: 'memory-game', label: 'juegos', icon: <IconSportsEsports /> },
  { url: 'about', label: 'sobre mí', icon: <IconGuardian /> },
];

export const PublicPageLayout = ({ children }: { children: React.ReactNode; }) => {
  const { tones } = useThemeController();
  const { copied, copyToClipboard } = useClipboard();

  return (
    <div className={`bg-fixed bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${tones.fromColor.dark} to-stone-950 min-h-screen grid`}>
      <header className="flex justify-between items-center p-1 md:px-4">
        <Link href="home" title="ir a inicio" className="group text-center">
          <h1 className="text-stone-400 text-2xl font-semibold group-hover:text-stone-200 transition-colors duration-300">Pablo F. Diaz</h1>

          <h2 className="text-stone-500 uppercase italic group-hover:text-stone-200 transition-colors duration-300 text-base">programador</h2>
        </Link>

        <SidebarPortal listRoutes={links} />
      </header>

      <main className="md:w-5/6 lg:w-2/3 my-10 md:mx-auto px-4 md:px-0 space-y-10">
        {children}
      </main>

      <footer className={`bg-stone-900 text-stone-200 outline ${tones.outlineColor.normal} space-y-4 p-4`}>
        <header>
          <h3 className="text-2xl md:text-3xl font-bold uppercase">informacin de contacto</h3>
        </header>

        <div className="flex flex-col md:flex-row justify-center gap-4 px-4">
          <span className="space-x-2 flex items-center">
            <span><LinkedInIcon width={42} height={42} /></span>
            <strong className="font-bold">LinkedIn</strong>:
            <Link href="https://www.linkedin.com/in/pfd-dev/" title="LinkedIn" target="_blank" className="text-sky-500 hover:text-sky-600 underline">pfd-dev</Link>
          </span>

          <div className="flex items-center gap-4 relative">
            <span className="space-x-2 flex items-center" onClick={() => copyToClipboard("pfd1795@gmail.com")}>
              <span><GmailIcon width={42} height={42} /></span>
              <strong className="font-bold">Gmail</strong>:
              <span title="Gmail" className="text-sky-500 hover:text-sky-600 underline cursor-pointer">pfd1795@gmail.com</span>
            </span>

            {copied &&
              <span className="bg-green-600 text-stone-200 absolute -bottom-10 right-5 rounded-xl py-1 px-2 text-nowrap">
                ¡Correo copiado!
              </span>
            }
          </div>

          <span className="space-x-2 flex items-center">
            <span><GitHubIcon width={42} height={42} /></span>
            <strong className="font-bold">GitHub</strong>:
            <Link href="https://github.com/pfd-dev" title="GitHub" target="_blank" className="text-sky-500 hover:text-sky-600 underline">pfd-dev</Link>
          </span>
        </div>

        <hr className="border-stone-700" />

        <p className="text-stone-400">
          Los vectores y iconos son de <Link href="https://github.com/garudatechnologydevelopers/sketch-icons?ref=svgrepo.com" title="GitHub" target="_blank" className="text-sky-500 hover:text-sky-600 underline">githun/GarudaTechnology</Link> y <Link href="https://www.svgrepo.com/author/Garuda%20Technology/" target="_blank" className="text-sky-500 hover:text-sky-600 underline">svgrepo/GarudaTechnology</Link> con la licencia MIT de <Link href="https://www.svgrepo.com/" target="_blank" className="text-sky-500 hover:text-sky-600 underline">SVG Repo</Link>. Y de <Link href={"https://fonts.google.com/icons"} target="_blank" className="text-sky-500 hover:text-sky-600 underline">google/icons</Link>
        </p>

        <div className="flex justify-between items-end">
          <div className="grid">
            <p className="text-sm text-stone-400">
              SITIO DESARROLLADOR POR<br />
            </p>
            <Link href="https://github.com/pfd-dev" target="_blank" className="text-stone-200 text-xl hover:underline text-nowrap italic text-center">pfd-dev</Link>
          </div>

          <p className="text-sm text-stone-400 text-end">Ver. 1.0.0</p>
        </div>
      </footer>
    </div>
  );
}
