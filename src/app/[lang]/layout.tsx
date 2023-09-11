import { FC, ReactNode } from "react";
import { Locale, getDictionary } from "./dictionaries";
import { Montserrat } from "next/font/google";

import "../globals.css";
import Header from "@/components/Header";

export interface ILang {
  lang: Locale;
}
interface IRootLayout {
  children: ReactNode;
  params: ILang;
}

const montserrat = Montserrat({
  weight: ["500", "700", "800"],
  display: "swap",
  subsets: ["latin"],
});

const RootLayout: FC<IRootLayout> = async ({ children, params }) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} className={montserrat.className}>
      <body className="text-white">
        <div className="h-screen bg-main-image bg-no-repeat p-20">
          <header>
            <Header dictionary={dictionary} />
          </header>

          <main>{children}</main>

          <footer></footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
