"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Hooks
import { useThemeController } from "@/libs/hooks/useThemeController";
// Icons
import { GitHubIcon, GmailIcon, LinkedInIcon } from "@/utils/icons";
// Pictures
import photoProfile from "@/utils/images/profile.png";
// Local Components
import { SkillsDev } from "./components/SkillsDev";
import { WorkExperience } from "./components/WorkExperience";
// Lang
import dataLeng from "./lang-es.json";

// &quot; = ""

const HomeScreen: React.FC = () => {
  const { tones } = useThemeController();

  const [copied, setCopied] = useState(false);
  const email = "pfd1795@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Oculta el mensaje después de 2 segundos
    });
  };

  return (
    <>
      <section className="text-stone-200 p-2 md:p-4 space-y-2">
        <p>
          <strong className="text-3xl md:text-5xl text-nowrap md:pl-10 mr-2">{dataLeng.home.welcomeMessage}</strong>
          <br className="md:hidden" />
          <span className="text-xl md:text-2xl text-nowrap">{dataLeng.home.introText}</span>
        </p>

        <div className="md:px-10">
          <figure className={`${tones.bgColor.dark} outline ${tones.outlineColor.normal} float-right md:float-left h-44 w-44 rounded-full m-2 md:m-4 overflow-hidden`}>
            <Image src={photoProfile} alt="photo profile" />
          </figure>

          <div>
            <p className="md:text-xl">
              <span className="ml-4"></span>
              {dataLeng.home.description.greeting} <strong className="text-xl italic">{dataLeng.home.description.name}</strong>{dataLeng.home.description.role}<br />
              {dataLeng.home.description.commitment}.<br />
              <strong className="text-xl italic">{dataLeng.home.description.end}</strong>
            </p>

            <hr className={`border ${tones.borderColor.normal} rounded-xl my-2`} />

            <div className="flex justify-center gap-4">
              <Link href="https://www.linkedin.com/in/pfd-dev/" title="LinkedIn" target="_blank" className={`bg-white text-sky-600 hover:text-sky-500 hover:underline border-2 border-white hover:${tones.borderColor.normal} rounded-xl`}>
                <LinkedInIcon width={48} height={48} />
              </Link>

              <div className="relative inline-block">
                <div
                  onClick={handleCopyEmail}
                  title="Copiar correo"
                  className={`bg-white text-sky-600 hover:text-sky-500 hover:underline border-2 border-white hover:${tones.borderColor.normal} rounded-xl cursor-pointer`}
                >
                  <GmailIcon width={48} height={48} />
                </div>
                {copied && (
                  <span className="bg-green-600 text-stone-200 absolute top-full mt-1 left-1/2 transform -translate-x-1/2 rounded-xl py-1 px-2 text-nowrap">
                    ¡Correo copiado!
                  </span>
                )}
              </div>

              <Link href="https://github.com/pfd-dev" title="GitHub" target="_blank" className={`bg-white text-sky-600 hover:text-sky-500 hover:underline border-2 border-white hover:${tones.borderColor.normal} rounded-xl`}>
                <GitHubIcon width={48} height={48} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WorkExperience />

      <SkillsDev />
    </>
  );
};

export { HomeScreen };