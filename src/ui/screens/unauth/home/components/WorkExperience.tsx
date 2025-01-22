// Hooks
import { useThemeController } from '@/libs/hooks/useThemeController';
// Components
import { ModalPortal } from '@/components/customized';
// Lang
import dataLeng from '@/lang/lang-es.json';

export function WorkExperience() {
  const { tones, UI_COLORS } = useThemeController();

  return (
    <section className={`${UI_COLORS.container} rounded-xl py-4 p-4 space-y-4 overflow-hidden`}>
      <header>
        <h2 className="text-2xl md:text-3xl font-bold text-center uppercase">{dataLeng.HomePage.workExperience.overview.title}</h2>
        <h3 className="px-4 md:px-10">{dataLeng.HomePage.workExperience.overview.subtitle}</h3>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataLeng.HomePage.workExperience.positions.map((item, index) =>
          <ModalPortal
            key={index}
            modalTitle={dataLeng.HomePage.workExperience.overview.title + ": " + item.company}
            actionButton={
              <article className={`${tones.bgColor.dark} hover:${tones.bgColor.normal} outline  ${tones.outlineColor.normal} ${tones.textColor} h-full flex flex-col justify-center p-4 rounded-md cursor-pointer`}>
                <h4 className="text-xl md:text-2xl text-center text-balance font-bold mb-2">{item.company}</h4>
                <h5 className="text-center text-balance mb-4">{item.role}</h5>
              </article>
            }
          >
            <section>
              <header>
                <h3 className="text-4xl text-center text-balance font-bold mb-2">{item.company}</h3>
                <h4 className="text-stone-700 dark:text-stone-300 text-2xl text-center text-balance font-bold mb-2">{item.role}</h4>
              </header>

              <div className="space-y-2">
                <p><span className={`${tones.bgColor.dark} py-1 px-2 ${tones.textColor}`}><strong className="uppercase">{dataLeng.HomePage.workExperience.overview.labels.description}</strong></span> {item.description}</p>

                <p><span className={`${tones.bgColor.dark} py-1 px-2 ${tones.textColor}`}><strong className="uppercase">{dataLeng.HomePage.workExperience.overview.labels.duration}</strong></span> {item.duration}</p>

                <p><span className={`${tones.bgColor.dark} py-1 px-2 ${tones.textColor}`}><strong className="uppercase">{dataLeng.HomePage.workExperience.overview.labels.workplace}</strong></span> {item.employmentType}</p>

                <ul className="flex items-center flex-wrap gap-x-2">
                  <p><span className={`${tones.bgColor.dark} py-1 px-2 ${tones.textColor}`}><strong className="uppercase">{dataLeng.HomePage.workExperience.overview.labels.technologies}</strong></span></p>

                  {item.technologies?.map((tech, index) =>
                    <li key={index}>{tech},</li>
                  )}
                </ul>
              </div>
            </section>
          </ModalPortal>
        )}
      </div>
    </section>
  );
}
