import Link from 'next/link';
// Global
import { SidebarPortal } from '@/components/customized';
// Icons
import { IconDeployedCode, IconGuardian, IconHome, IconLabProfile, IconSportsEsports } from '@/utils/IconsGoogle';

const links = [
  { url: 'home', label: 'inicio', icon: <IconHome /> },
  { url: 'resume', label: 'curriculum', icon: <IconLabProfile /> },
  { url: 'projects', label: 'proyectos', icon: <IconDeployedCode /> },
  { url: 'memory-game', label: 'juegos', icon: <IconSportsEsports /> },
  { url: 'about', label: 'sobre mí', icon: <IconGuardian /> },
];

export const Header = () =>
  <header className="flex justify-between items-center p-1 md:px-4">
    <Link href="home" title="ir a inicio" className="group text-center">
      <h1 className="text-stone-400 text-2xl font-semibold group-hover:text-stone-200 transition-colors duration-300">Pablo F. Diaz</h1>

      <h2 className="text-stone-500 uppercase italic group-hover:text-stone-200 transition-colors duration-300 text-base">programador</h2>
    </Link>

    <SidebarPortal listRoutes={links} />
  </header>