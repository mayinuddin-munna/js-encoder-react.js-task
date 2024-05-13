import React, { FC, ReactNode } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import PropertyCardH from "@/components/PropertyCard";

const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 6);

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
  heading = "Featured places to stay",
  subHeading = "Popular places to stay that recommends for you",
  tabs = ["Cox's Bazar", "Kuakata", "Bandarban", "Rangamati"],
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