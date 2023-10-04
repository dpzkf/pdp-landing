import { FC } from "react";
import { Montserrat, Raleway } from "next/font/google";

import "../globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Head from "./head";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const montserrat = Montserrat({
  weight: ["500", "700", "800"],
  display: "swap",
  subsets: ["latin"],
});

export const raleway = Raleway({
  weight: ["700", "800"],
  display: "swap",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lng: string };
}

const RootLayout: FC<RootLayoutProps> = ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)} className={montserrat.className}>
      <Head lng={lng} />

      <body className="text-white">{children}</body>
    </html>
  );
};

export default RootLayout;
