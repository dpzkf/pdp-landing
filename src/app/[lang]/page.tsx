import { FC } from "react";
import { Dictionaries, getDictionary } from "./dictionaries";
import { ILang } from "./layout";

interface IMainPage {
  params: ILang;
}

const MainPage: FC<IMainPage> = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);

  return <div className="">{}</div>;
};

export default MainPage;
