import Image from "next/image";
import React, { FC } from "react";

import logo from "@/assets/svg/logo.svg";
import { ITranslation } from "@/types/inner";
import { useTranslation } from "@/app/i18n/client";
import { languages, fallbackLng } from "@/app/i18n/settings";

const Header: FC<ITranslation> = ({ lng }) => {
  const { t } = useTranslation(lng, "header");

  return (
    <header>
      <div className="grid grid-cols-3 mb-52">
        <Image src={logo} alt="logo" />
        <div className="grid grid-cols-3 gap-x-2 place-items-center">
          <div>{t("equipment")}</div>
          <div>{t("aboutUs")}</div>
          <div>{t("blog")}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
