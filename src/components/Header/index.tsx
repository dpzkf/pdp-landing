import { Dictionaries } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import React, { FC } from "react";

import logo from "@/assets/svg/logo.svg";

interface IHeader {
  dictionary: Dictionaries;
}

const Header: FC<IHeader> = ({ dictionary }) => {
  return (
    <div className="grid grid-cols-3 mb-52">
      <Image src={logo} alt="logo" />
      <div className="grid grid-cols-3 gap-x-2 place-items-center">
        <div>{dictionary.header.equipment}</div>
        <div>{dictionary.header.aboutUs}</div>
        <div>{dictionary.header.blog}</div>
      </div>
    </div>
  );
};

export default Header;
