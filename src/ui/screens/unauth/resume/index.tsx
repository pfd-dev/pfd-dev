import Link from 'next/link';
// Hooks
import { useClipboard, useThemeController } from '@/libs/hooks';
// Components
import { Button } from '@/components/common';
// Icons
import { IconDownload } from '@/utils/IconsGoogle';
// Lang
import dataLeng from '@/lang/lang-es.json';

export function ResumeScreen() {
  const { UI_COLORS } = useThemeController();
  const { copied, copyToClipboard } = useClipboard();

  const HeaderContent = () =>
    <header className="grid sm:grid-cols-2 sm:items-center">
      <h2 className="text-4xl font-black text-center sm:text-left uppercase underline">
        {dataLeng.ResumePage.titles.cv}
      </h2>

      <div className="flex md:flex-col flex-wrap justify-center gap-x-6">
        {dataLeng.ResumePage.personal_info.professions.map((info, index) =>
          <h3 key={index} className="text-stone-700 dark:text-stone-300 text-xl md:text-2xl font-bold text-center sm:text-right text-nowrap uppercase">
            {info}
          </h3>
        )}
      </div>
    </header>

  const IntroContent = () =>
    <section className="grid sm:grid-cols-2 gap-2">
      <div>
        <p>
          <span className="capitalize">{`${dataLeng.ResumePage.personal_info.fullnameTitle}: `}</span>
          <strong className="text-xl">{dataLeng.ResumePage.personal_info.fullname}</strong>
        </p>

        <p>
          <span className="capitalize">{`${dataLeng.ResumePage.personal_info.nationalityTitle}: `}</span>
          <strong className="text-xl">{dataLeng.ResumePage.personal_info.nationality}</strong>
        </p>

        <div className="relative inline-block">
          <p>
            <span className="capitalize">{`${dataLeng.ResumePage.personal_info.mailTitle}: `}</span>
            <strong
              className="text-xl cursor-pointer hover:text-cyan-700 hover:underline"
              onClick={() => copyToClipboard("pfd1795@gmail.com")}
              title="Copiar correo"
            >
              {dataLeng.ResumePage.personal_info.mailName}
            </strong>
          </p>

          {copied &&
            <span className="bg-green-600 text-stone-200 absolute top-full mt-1 left-1/2 transform -translate-x-1/2 rounded-xl py-1 px-2 text-nowrap">
              ¡Correo copiado!
            </span>
          }
        </div>

        <p>
          <span className="capitalize">{`${dataLeng.ResumePage.personal_info.linkedinTitle}: `}</span>
          <Link
            href={dataLeng.ResumePage.personal_info.linkedinUrl}
            className="hover:text-cyan-700 hover:underline"
            target="_blank"
            title={`Link a ${dataLeng.ResumePage.personal_info.linkedinName}`}
            aria-label={`Link to ${dataLeng.ResumePage.personal_info.linkedinName}`}
          >
            <strong className="text-xl">{dataLeng.ResumePage.personal_info.linkedinName}</strong>
          </Link>
        </p>

        <p>
          <span className="capitalize">{`${dataLeng.ResumePage.personal_info.githubTitle}: `}</span>
          <Link
            href={dataLeng.ResumePage.personal_info.githubUrl}
            className="hover:text-cyan-700 hover:underline"
            target="_blank"
            title={`Link a ${dataLeng.ResumePage.personal_info.githubName}`}
            aria-label={`Link to ${dataLeng.ResumePage.personal_info.githubName}`}
          >
            <strong className="text-xl">{dataLeng.ResumePage.personal_info.githubName}</strong>
          </Link>
        </p>

        <p>
          <span className="capitalize">{`${dataLeng.ResumePage.personal_info.webSiteTitle}: `}</span>
          <Link
            href={dataLeng.ResumePage.personal_info.webSiteUrl}
            className="hover:text-cyan-700 hover:underline"
            target="_blank"
            title={`Link a ${dataLeng.ResumePage.personal_info.githubName}`}
            aria-label={`Link to ${dataLeng.ResumePage.personal_info.webSiteName}`}
          >
            <strong className="text-xl">
              {dataLeng.ResumePage.personal_info.webSiteName}{dataLeng.ResumePage.personal_info.githubName}
            </strong>
          </Link>
        </p>
      </div>

      <div className="space-y-2">
        <div>
          <p className="text-xl font-bold pl-6">{dataLeng.ResumePage.personal_info.greeting1}</p>
          <p className="text-center text-balance">{dataLeng.ResumePage.personal_info.greetingResume}</p>
        </div>

        <div className="flex justify-center print:hidden">
          <a href="cv_pablo.pdf" download={"cv_pablo.pdf"} className="self-center">
            <Button text={"Descargar CV"} title={"Descargar Curriculum Vitae"} rightIcon={<IconDownload />} />
          </a>
        </div>
      </div>
    </section>

  const ListWorkExperience = () =>
    dataLeng.ResumePage.data.work_experience.map((work, index) =>
      <article key={index} className={`${UI_COLORS.card} grid px-2 py-1 rounded-xl`}>
        <h4 className="text-2xl font-bold text-balance">{work.company}</h4>
        <h5 className="text-stone-700 dark:text-stone-300 text-xl text-balance">{work.title}</h5>
        <p className="text-sm font-bold text-right italic">{work.date}</p>
      </article>
    );

  const ListEducations = () =>
    dataLeng.ResumePage.data.educations.map((dataEducation, index) =>
      <article key={index} className={`${UI_COLORS.card} grid px-2 py-1 rounded-xl`}>
        <h4 className="text-2xl font-bold text-center text-balance">{dataEducation.description}</h4>
        <p className="text-stone-700 dark:text-stone-300 text-xl text-center text-balance">{dataEducation.title}</p>
      </article>
    );

  const LayoutContainer = ({ title, children }: { title: string; children: React.ReactNode; }) =>
    <section className="space-y-2">
      <header>
        <h3 className="text-center font-bold text-3xl uppercase">{title}</h3>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">{children}</div>
    </section>

  return (
    <div className={`${UI_COLORS.container} rounded-xl p-2 md:p-4 space-y-4 print:p-0 print:outline-0`}>
      <HeaderContent />

      <IntroContent />

      <LayoutContainer title={dataLeng.ResumePage.titles.experience}>
        <ListWorkExperience />
      </LayoutContainer>

      <LayoutContainer title={dataLeng.ResumePage.titles.studies}>
        <ListEducations />
      </LayoutContainer>
    </div>
  );
}
