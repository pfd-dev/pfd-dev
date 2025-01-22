import { useState } from 'react';
// Hooks
import { useThemeController } from '@/libs/hooks/useThemeController';
// Components
import { ModalPortal, Tabs } from '@/components/customized';
// Lang
import dataLeng from '@/lang/lang-es.json';

type SkillCategory = 'lenguages' | 'frameworks' | 'libraries';

const SKILLS_TAB_OPTIONS = [
  { key: 'lenguages', value: 'lenguajes' },
  { key: 'libraries', value: 'librerías' },
  { key: 'frameworks', value: 'entornos de desarrollo' }
];

export function SkillsDev() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('lenguages');

  const currentSkills = dataLeng.HomePage.skillsDev.techSkills[activeTab];

  const { tones, UI_COLORS } = useThemeController();

  return (
    <section className={`${UI_COLORS.container} rounded-xl p-4 space-y-4 overflow-hidden`}>
      <header>
        <h2 className="text-2xl md:text-3xl font-bold text-center uppercase">{dataLeng.HomePage.skillsDev.header.title}</h2>
        <h3 className="px-4 md:px-10">{dataLeng.HomePage.skillsDev.header.subtitle}</h3>
      </header>

      <Tabs
        options={SKILLS_TAB_OPTIONS}
        activeTab={activeTab}
        onTabChange={(selectedValue) => setActiveTab(selectedValue as SkillCategory)}
      />

      <div>
        {currentSkills.length > 0 ?
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentSkills.map((skill, index) =>
              <ModalPortal
                key={index}
                modalTitle={`conocimientos en ${skill.title}`}
                actionButton={
                  <article className={`${UI_COLORS.card} h-full p-4 rounded-md cursor-pointer`}>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-sm mb-4">{skill.subtitle}</p>
                  </article>
                }
              >
                <section className="space-y-4">
                  {skill.levels.map((level, index) =>
                    <article key={index} className="py-2 space-y-2">
                      <h3 className={`border-b-4 border-dashed ${tones.borderColor.normal} text-2xl md:text-3xl uppercase font-bold`}>{level.name}</h3>

                      <ul className="space-y-2 px-6 list-disc">
                        {level.lessons.map((item, index) =>
                          <li key={index}>
                            <h5><span className={`${tones.bgColor.dark} py-1 px-2 ${tones.textColor}`}>
                              <strong className="uppercase">{item.name}</strong>
                            </span></h5>

                            <p>{item.description}</p>

                            {item.codeExample.length && <p className='text-sm italic font-bold'>{item.codeExample.join(' | ')}</p>}
                          </li>
                        )}
                      </ul>
                    </article>
                  )}
                </section>
              </ModalPortal>
            )}
          </div> :
          <p className="text-center">{dataLeng.HomePage.skillsDev.noSkills}</p>
        }
      </div>
    </section>
  );
}
