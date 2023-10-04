import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

import RectanleHeader from "@/assets/svg/rectangleHeader.svg";
import ArrowLeft from "@/assets/svg/arrowLeft.svg";
import { raleway } from "@/app/[lng]/layout";

export interface ICard {
  id: number;
  imageSrc: StaticImageData;
  subHeader: string;
  headerText: string;
  bodyText: string;
}

const Card: FC<ICard> = ({ imageSrc, bodyText, headerText, subHeader, id }) => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex flex-col gap-y-7 p-10">
        <div className="flex flex-row gap-x-6">
          <Image src={RectanleHeader} alt="rectanleHeader" loading="lazy" />

          <div className={raleway.className}>
            <div className="w-fit text-main-accent text-lg tracking-widest uppercase">
              {subHeader}
            </div>
          </div>
        </div>
        <div>{headerText}</div>
        <div>{bodyText}</div>
        <div className="flex flex-row gap-x-6">
          <div className={raleway.className}>
            <div className="w-fit text-main-accent text-lg tracking-widest uppercase">
              read more
            </div>
          </div>
        </div>

        <Image src={RectanleHeader} alt="rectanleHeader" loading="lazy" />
      </div>

      <Image
        className="w-image-poster h-auto"
        src={imageSrc}
        loading="lazy"
        alt={`${id}-Poster`}
      />
    </div>
  );
};
export default Card;
