import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  GiAries,
  GiTaurus,
  GiGemini,
  GiCancer,
  GiLeo,
  GiVirgo,
  GiLibra,
  GiScorpio,
  GiSagittarius,
  GiCapricorn,
  GiAquarius,
  GiPisces,
} from "react-icons/gi";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const zodiacSigns = [
  {
    name: "Aries",
    icon: <GiAries className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "21/03 – 19/04",
    markdownPath: "./content/zodiac/aries.md",
  },
  {
    name: "Taurus",
    icon: <GiTaurus className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "20/04 – 20/05",
    markdownPath: "./content/zodiac/taurus.md",
  },
  {
    name: "Gemini",
    icon: <GiGemini className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "21/05 – 20/06",
    markdownPath: "./content/zodiac/gemini.md",
  },
  {
    name: "Cancer",
    icon: <GiCancer className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "21/06 – 22/07",
    markdownPath: "./content/zodiac/cancer.md",
  },
  {
    name: "Leo",
    icon: <GiLeo className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "23/07 – 22/08",
    markdownPath: "./content/zodiac/leo.md",
  },
  {
    name: "Virgo",
    icon: <GiVirgo className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "23/08 – 22/09",
    markdownPath: "./content/zodiac/virgo.md",
  },
  {
    name: "Libra",
    icon: <GiLibra className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "23/09 – 22/10",
    markdownPath: "./content/zodiac/libra.md",
  },
  {
    name: "Scorpio",
    icon: <GiScorpio className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "23/10 – 21/11",
    markdownPath: "./content/zodiac/scorpio.md",
  },
  {
    name: "Sagittarius",
    icon: (
      <GiSagittarius className="h-6 w-6 text-black dark:text-neutral-400" />
    ),
    description: "22/11 – 21/12",
    markdownPath: "./content/zodiac/sagittarius.md",
  },
  {
    name: "Capricorn",
    icon: <GiCapricorn className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "22/12 – 19/01",
    markdownPath: "./content/zodiac/capricorn.md",
  },
  {
    name: "Aquarius",
    icon: <GiAquarius className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "20/01 – 18/02",
    markdownPath: "./content/zodiac/aquarius.md",
  },
  {
    name: "Pisces",
    icon: <GiPisces className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "19/02 – 20/03",
    markdownPath: "./content/zodiac/pisces.md",
  },
];
