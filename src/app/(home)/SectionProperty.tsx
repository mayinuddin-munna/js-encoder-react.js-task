import React, { FC, ReactNode } from "react";
import { STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import PropertyCardH from "@/components/PropertyCard";

const DEMO_DATA: StayDataType[] = STAY_LISTINGS.filter((_, i) => i < 6);

export interface SectionGridFeaturePropertyProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
}

const SectionGridFeatureProperty: FC<SectionGridFeaturePropertyProps> = ({
  stayListings = DEMO_DATA,
  gridClass = "",
}) => {
  const renderCard = (stay: StayDataType, index: number) => {
    return <PropertyCardH key={index} className="h-full" data={stay} />;
  };

  return (
    <div className="relative">
      <div
        className={`grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 ${gridClass}`}
      >
        {stayListings.map(renderCard)}
      </div>
    </div>
  );
};

export default SectionGridFeatureProperty;
