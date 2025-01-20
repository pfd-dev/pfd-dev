'use client'
import { PublicPageLayout } from '@/ui/layouts';
// Contaxts
import { ThemeProvider } from '@/libs/contexts/ThemeContext';

export default function PagesLayout({ children }: { children: React.ReactNode; }) {
  return (
    <ThemeProvider>
      <div className="bg-stone-200 dark:bg-stone-900 text-stone-900 dark:text-stone-200 text-lg fill-stone-900 dark:fill-stone-200">
        <PublicPageLayout>
          {children}
        </PublicPageLayout>
      </div>
    </ThemeProvider>
  );
}
