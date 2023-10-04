import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import { FC } from "react";
import { ITranslation } from "@/types/inner";

import type { Metadata } from "next";

const Head: FC<ITranslation> = async ({ lng }) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <>
      <title>{t("title")}</title>
      <meta name="description" content="Home page" />
    </>
  );
};

export default Head;
