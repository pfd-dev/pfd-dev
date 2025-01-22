'use client';
import Link from 'next/link';
import Image from 'next/image';
// Hooks
import { useClipboard, useThemeController } from '@/libs/hooks';
// Icons
import { GitHubIcon, GmailIcon, LinkedInIcon } from '@/utils/icons';
// Pictures
import photoProfile from '@/utils/images/profile.png';
// Local Components
import { SkillsDev, WorkExperience } from './components';
// Lang
import dataLeng from '@/lang/lang-es.json';

// &quot; = ''

function HomeScreen() {
  const { tones } = useThemeController();
  const { copied, copyToClipboard } = useClipboard();

  return (
    <>
      <section className="text-stone-200 p-2 md:p-4 space-y-2">
        <p>
          <strong className="text-3xl md:text-5xl text-nowrap md:pl-10 mr-2">{dataLeng.HomePage.intro.welcomeMessage}</strong>
          <br className="md:hidden" />
          <span className="text-xl md:text-2xl text-nowrap">{dataLeng.HomePage.intro.introText}</span>
        </p>

        <div className="md:px-10">
          <figure className={`${tones.bgColor.dark} outline ${tones.outlineColor.normal} float-right md:float-left h-44 w-44 rounded-full m-2 md:m-4 overflow-hidden`}>
            <Image src={photoProfile} alt="photo profile" />
          </figure>

          <div>
            <p className="md:text-xl">
              <span className="ml-4"></span>
              {dataLeng.HomePage.intro.description.greeting} <strong className="text-xl italic">{dataLeng.HomePage.intro.description.name}</strong>{dataLeng.HomePage.intro.description.role}<br />
              {dataLeng.HomePage.intro.description.commitment}.<br />
              <strong className="text-xl italic">{dataLeng.HomePage.intro.description.end}</strong>
            </p>

            <hr className={`border ${tones.borderColor.normal} rounded-xl my-2`} />

            <div className="flex justify-center gap-4">
              <Link href="https://www.linkedin.com/in/pfd-dev/" title="LinkedIn" target="_blank" className={`bg-white text-sky-600 hover:text-sky-500 hover:underline border-2 border-white hover:${tones.borderColor.normal} rounded-xl`}>
                <LinkedInIcon width={48} height={48} />
              </Link>

              <div className="relative inline-block">
                <div
                  onClick={() => copyToClipboard("pfd1795@gmail.com")}
                  title="Copiar correo"
                  className={`bg-white text-sky-600 hover:text-sky-500 hover:underline border-2 border-white hover:${tones.borderColor.normal} rounded-xl cursor-pointer`}
                >
                  <GmailIcon width={48} height={48} />
                </div>
                {copied &&
                  <span className="bg-green-600 text-stone-200 absolute top-full mt-1 left-1/2 transform -translate-x-1/2 rounded-xl py-1 px-2 text-nowrap">
                    ¡Correo copiado!
                  </span>
                }
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
