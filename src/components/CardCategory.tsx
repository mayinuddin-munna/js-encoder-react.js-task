import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import Image from "next/image";

export interface CardCategoryProps {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategory: FC<CardCategoryProps> = ({
  className = "flex-1",
  taxonomy,
}) => {

  const { count, name, thumbnail } = taxonomy;
  
  return (
    <div
      className={`relative flex w-full group rounded-2xl z-0 overflow-hidden ${className}`}
    >
      <div className="aspect-w-16 aspect-h-10 sm:aspect-h-12 xl:aspect-h-9 w-full h-0"></div>
      <Image
        fill
        alt=""
        src={thumbnail || ""}
        className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-white">
        <span className="absolute inset-0 bg-gradient-to-t from-black/60"></span>
        <h2 className={`relative text-lg lg:text-xl font-semibold`}>{name}</h2>
        <span className={`relative block mt-1.5 text-sm text-neutral-100`}>
          {count} properties
        </span>
      </div>
    </div>
  );
};

export default CardCategory;
