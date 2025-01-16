import { redirect } from "next/navigation";
import Link from "next/link";

export default function AppHome() {
  redirect("/home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1 className="text-center text-5xl">Hello World!</h1>
      </header>

      <div>
        <p className="text-center text-3xl">Go to <Link href={"home"} className={"text-sky-500 hover:text-sky-700 hover:underline"}>home</Link></p>
        <p className="text-center text-3xl">For some reason, this page should NOT be displayed. Please go back to the home page.</p>
      </div>
    </main>
  );
}

// import { getDictionary } from './dictionaries'
// import Link from 'next/link'

// export default async function Home({ params: { lang } }: { params: { lang: 'en' | 'es' } }) {
//   const dict = await getDictionary(lang)

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
//         <h1 className="text-4xl font-bold mb-4">{dict.title}</h1>
//         <p className="mb-4">{dict.description}</p>
//         <Link href={`/${lang === 'en' ? 'es' : 'en'}`} className="text-blue-500 hover:underline">
//           {dict.changeLanguage}
//         </Link>
//       </div>
//     </main>
//   )
// }