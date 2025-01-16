"use client"
import { PublicPageLayout } from "@/ui/layouts";
// Contaxts
import { ThemeProvider } from "@/libs/contexts/ThemeContext";
// import { AppConfig } from "@/utils/AppConfig";

export default function PagesLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // if (!AppConfig.locales.includes(props.params.pages)) notFound();
  return (
    <ThemeProvider>
      <div className="bg-stone-200 dark:bg-stone-900 text-stone-900 dark:text-stone-200 text-lg fill-stone-900 dark:fill-stone-200">
        <PublicPageLayout>
          {props.children}
        </PublicPageLayout>
      </div>
    </ThemeProvider>
  );
}
