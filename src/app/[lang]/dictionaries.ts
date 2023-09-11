import "server-only";

import dictionary from "./dictionaries/en.json";

export type Locale = "en";

export type Dictionaries = typeof dictionary;

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
