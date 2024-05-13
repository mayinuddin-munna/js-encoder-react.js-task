import __stayListing from "./json/__stayListing.json";
import { StayDataType, AuthorType, TaxonomyType } from "./types";
import { Route } from "@/routers/types";

const STAY_LISTINGS: StayDataType[] = __stayListing.map((post, index): StayDataType => {
  return {
    ...post,
    id: `stayListing_${index}_`,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
    href: post.href as Route,
    author: {
      id: post.authorId,
      firstName: "", // Add appropriate values for these properties
      lastName: "",
      displayName: "",
      avatar: "",
      count: 0,
      desc: "",
      jobName: "",
      href: "",
    },
    listingCategory: {
      id: post.listingCategoryId,
      name: "", // Add appropriate values for these properties
      taxonomy: "category", // Assuming this is the default value
    },
    maxGuests: 0, // Add appropriate value
    bedrooms: 0, // Add appropriate value
    bathrooms: 0, // Add appropriate value
    address: "", // Add appropriate value
    reviewStart: 0, // Add appropriate value
    reviewCount: 0, // Add appropriate value
    like: false, // Add appropriate value
    galleryImgs: [], // Add appropriate value
    price: "", // Add appropriate value
    map: { lat: 0, lng: 0 }, // Add appropriate value
  };
});

export { STAY_LISTINGS };
