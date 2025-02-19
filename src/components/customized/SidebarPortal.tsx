'use client';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Hooks
import { useThemeController } from '@/libs/hooks/useThemeController';
// Global Components
import { Button } from '@/components/common';
import { ThemeColorPicker } from '@/components/ThemeColorPicker';
// Icons
import { IconClose, IconKeyboardArrowDown, IconKeyboardArrowUp, IconMenu, IconSettings } from '@/utils/IconsGoogle';

// <body>: <div id="sidebar-portal-root"></div>

interface SidebarPortalProps {
  defaultRoute?: string;
  listRoutes: Array<{
    url: string,
    label: string,
    icon?: React.ReactNode
  }>;
  othersRoutes?: Array<{
    url: string,
    label: string,
    icon?: React.ReactNode
  }>;
};

const SidebarPortal: React.FC<SidebarPortalProps> = ({
  defaultRoute = '',
  listRoutes = [],
  othersRoutes = [],
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const pathname = usePathname();

  const handleOpenMenu = () => setOpenMenu(true);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
    handleCloseAccordion();
  }, []);

  const handleOpenAccordion = () => setAccordionOpen((prev) => !prev);

  const handleCloseAccordion = () => setAccordionOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && openMenu) handleCloseMenu();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openMenu, handleCloseMenu]);

  const { tones } = useThemeController();

  const menuContent = (
    <div className="bg-stone-950/90 h-screen w-screen fixed top-0 left-0 z-10">
      <aside className={`bg-stone-300 dark:bg-stone-900 h-dvh w-4/5 sm:w-2/4 lg:w-1/4 ${tones.borderColor.normal} border-l-4 border-y-4 rounded-l-xl absolute top-0 right-0 space-y-2 flex flex-col md:px-2 transition-all`}>
        <header className={`${tones.borderColor.normal} border-b-4 flex justify-between items-center py-1 px-2`}>
          <h2 className="text-stone-900 dark:text-stone-200 text-xl uppercase font-bold">menú</h2>

          <Button
            title={"cerrar menú (Esc)"}
            text={"cerrar"}
            rightIcon={<IconClose />}
            onClick={handleCloseMenu}
          />
        </header>

        <nav className="flex flex-col justify-between h-full">
          <ul className="text-stone-900 dark:text-stone-200 font-semibold space-y-1">
            {listRoutes.map((route, i) => (
              <li key={i}>
                <Link
                  href={defaultRoute + route.url}
                  onClick={handleCloseMenu}
                  className={`text-xl py-1 px-2 flex items-center gap-2 space-x-2 
                    ${pathname === "/" + route.url ? `${tones.bgColor.normal} text-stone-200` : "hover:bg-stone-400 hover:dark:bg-stone-700"}
                  `}
                >
                  <span className={`${pathname === "/" + route.url ? "fill-stone-200" : "fill-stone-900 dark:fill-stone-200"}`}>{route.icon}</span>

                  <span>{route.label}</span>
                </Link>
              </li>
            ))}
          </ul>


          <section>
            <header
              className={`border-t-4 ${tones.borderColor.normal} flex justify-between items-center py-1 pl-2 pr-4 md:pr-2 cursor-pointer`}
              onClick={handleOpenAccordion}
            >
              <div className="flex items-center gap-2 space-x-2">
                <IconSettings className="fill-stone-900 dark:fill-stone-200" />

                <h3 className="text-stone-900 dark:text-stone-200 text-xl uppercase font-bold">configurar</h3>
              </div>

              <span>{accordionOpen ? <IconKeyboardArrowDown className="fill-stone-900 dark:fill-stone-200" /> : <IconKeyboardArrowUp className="fill-stone-900 dark:fill-stone-200" />}</span>
            </header>

            {accordionOpen && <ThemeColorPicker />}
          </section>
        </nav>

        {othersRoutes.length > 0 && (
          <section>
            <header
              className={`${tones.borderColor.normal} border-y-4 flex justify-between items-center py-1 pl-2 pr-4 md:pr-2 cursor-pointer`}
              onClick={handleOpenAccordion}
            >
              <h3 className="text-stone-900 dark:text-stone-200 text-xl uppercase font-bold">otras rutas</h3>

              {/* <span>{accordionOpen ? <IconKeyboardArrowUp /> : <IconKeyboardArrowDown />}</span> */}
            </header>

            {accordionOpen && (
              <ul className="space-y-2 text-stone-900 dark:text-stone-200 font-semibold">
                {othersRoutes.map((route, i) => (
                  <li key={i}>
                    <Link
                      href={defaultRoute + route.url}
                      onClick={handleCloseMenu}
                      className={`
                      text-xl py-1 px-2 flex items-center space-x-2
                      ${pathname === "/" + route.url ?
                          `${tones.bgColor.normal} text-stone-200` :
                          "hover:bg-stone-400 hover:dark:bg-stone-700"}
                    `}
                    >
                      {route.icon} {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </aside>
    </div>
  );

  return (
    <>
      <Button
        title={"abrir menú"}
        text={"menú"}
        rightIcon={<IconMenu />}
        onClick={handleOpenMenu}
        styles="fixed top-2 right-2"
      />

      {openMenu && createPortal(menuContent, document.getElementById("sidebar-portal-root")!)}
    </>
  );
};

export { SidebarPortal };
