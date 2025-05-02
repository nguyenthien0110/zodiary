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
    description: "The bold and adventurous ram.",
    markdownPath: "./content/zodiac/aries.md",
  },
  {
    name: "Taurus",
    icon: <GiTaurus className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "The reliable and grounded bull.",
    markdownPath: "./content/zodiac/taurus.md",
  },
  {
    name: "Gemini",
    icon: <GiGemini className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "The curious and adaptable twins.",
    markdownPath: "./content/zodiac/gemini.md",
  },
  {
    name: "Cancer",
    icon: <GiCancer className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "The nurturing and emotional crab.",
    markdownPath: "./content/zodiac/cancer.md",
  },
  {
    name: "Leo",
    icon: <GiLeo className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "The confident and charismatic lion.",
    markdownPath: "./content/zodiac/leo.md",
  },
  {
    name: "Virgo",
    icon: <GiVirgo className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "The meticulous and analytical maiden.",
    markdownPath: "./content/zodiac/virgo.md",
  },
  {
    name: "Libra",
    icon: <GiLibra className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "The balanced and diplomatic scales.",
    markdownPath: "./content/zodiac/libra.md",
  },
  {
    name: "Scorpio",
    icon: <GiScorpio className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "The intense and mysterious scorpion.",
    markdownPath: "./content/zodiac/scorpio.md",
  },
  {
    name: "Sagittarius",
    icon: (
      <GiSagittarius className="h-6 w-6 text-black dark:text-neutral-400" />
    ),
    description: "The adventurous and optimistic archer.",
    markdownPath: "./content/zodiac/sagittarius.md",
  },
  {
    name: "Capricorn",
    icon: <GiCapricorn className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "The disciplined and ambitious goat.",
    markdownPath: "./content/zodiac/capricorn.md",
  },
  {
    name: "Aquarius",
    icon: <GiAquarius className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "The innovative and humanitarian water bearer.",
    markdownPath: "./content/zodiac/aquarius.md",
  },
  {
    name: "Pisces",
    icon: <GiPisces className="h-6 w-6 text-black dark:text-neutral-400" />,
    description: "The compassionate and dreamy fish.",
    markdownPath: "./content/zodiac/pisces.md",
  },
];
