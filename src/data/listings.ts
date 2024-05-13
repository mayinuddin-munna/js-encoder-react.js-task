import __stayListing from "./json/__stayListing.json";
import { StayDataType } from "./types";
import { Route } from "@/routers/types";

const STAY_LISTINGS = __stayListing.map((post, index): StayDataType => {
  return {
    ...post,
    id: `stayListing_${index}_`,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
    href: post.href as Route,
    author: post?.author,
    listingCategory: post?.listingCategory,
  };
});


export { STAY_LISTINGS };
