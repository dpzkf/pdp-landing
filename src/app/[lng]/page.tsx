"use client";
import ArrowDown from "@/assets/svg/arrowDown.svg";
import RectanleHeader from "@/assets/svg/rectangleHeader.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "../i18n/client";
import Header from "@/components/Header";
import { raleway } from "./layout";
import Card, { ICard } from "@/components/Card";

import FirstPoster from "@/assets/png/01.png";
import SecondPoster from "@/assets/png/02.png";
import ThirdPoster from "@/assets/png/03.png";

const cards: ICard[] = [
  {
    id: 1,
    bodyText: "123",
    headerText: "123",
    imageSrc: FirstPoster,
    subHeader: "123",
  },
  {
    id: 2,
    bodyText: "",
    headerText: "",
    imageSrc: SecondPoster,
    subHeader: "",
  },
  {
    id: 3,
    bodyText: "123",
    headerText: "123",
    imageSrc: ThirdPoster,
    subHeader: "123",
  },
];

const MainPage = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation(lng, "main");

  return (
    <div className="h-full bg-main-image bg-no-repeat p-20">
      <Header lng={lng} />

      <main>
        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="flex flex-col flex-wrap gap-y-10 w-2/4 h-full ">
            <div className="flex flex-row gap-x-6">
              <Image src={RectanleHeader} alt="rectanleHeader" loading="lazy" />

              <div className={raleway.className}>
                <div className="w-fit text-main-accent text-lg tracking-widest uppercase">
                  {t("hiking")}
                </div>
              </div>
            </div>

            <div className="w-fit text-7xl drop-shadow-lg">{t("prepared")}</div>

            <motion.div
              className="flex flex-row gap-x-2"
              initial={{ y: "100%" }}
              animate={{ y: "70%" }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                repeatType: "reverse",
                repeat: Infinity,
              }}
            >
              <div className="w-fit text-lg">{t("scrollDown")}</div>

              <Image src={ArrowDown} alt="arrowDown" loading="lazy" />
            </motion.div>
          </div>

          <div className="h-spacing-container" />

          <div className="h-full w-full flex flex-col bg-main-bg">
            {cards.map(({ id, bodyText, headerText, imageSrc, subHeader }) => (
              <Card
                key={id}
                id={id}
                bodyText={bodyText}
                headerText={headerText}
                imageSrc={imageSrc}
                subHeader={subHeader}
              />
            ))}
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default MainPage;
