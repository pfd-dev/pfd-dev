"use client";
import { useState } from "react";
// Hooks
import { useThemeController } from "@/libs/hooks/useThemeController";
// Global Components
import { Button } from "@/components/common";
import { InputSelect } from "@/components/form";
// Icon
import { IconDarkMode, IconLightMode } from "@/utils/IconsGoogle";

const COLOR_OPTIONS = [
  { key: "blue", value: "azul" },
  { key: "red", value: "rojo" },
  { key: "green", value: "verde" },
  { key: "yellow", value: "amarillo" },
  { key: "pink", value: "rosado" },
  { key: "cyan", value: "cian" },
  { key: "sky", value: "celeste" },
];

const ThemeColorPicker: React.FC = () => {
  const { theme, toggleTheme, updateStageColor, tones } = useThemeController();
  const [colorOption, setColorOption] = useState(COLOR_OPTIONS[0].key);

  const handleColorOptions = (data: string) => {
    setColorOption(data);
    updateStageColor(data);
  };

  return (
    <section className={`border-t-4 ${tones.borderColor.normal} space-y-4 py-2 px-4`}>
      <div className="flex justify-between items-center">
        <p className="text-stone-900 dark:text-stone-200">cambiar modo</p>

        <Button
          onClick={toggleTheme}
          text={theme === "dark" ? "modo claro" : "modo oscuro"}
          rightIcon={theme === "dark" ? <IconLightMode /> : <IconDarkMode />}
        />
      </div>

      <div className="flex flex-wrap gap-2 bg-">
        <InputSelect
          label={"cambiar color"}
          name={"colorPicker"}
          onChange={handleColorOptions}
          options={COLOR_OPTIONS}
          value={colorOption}
        />
      </div>
    </section>
  );
};

export { ThemeColorPicker };
