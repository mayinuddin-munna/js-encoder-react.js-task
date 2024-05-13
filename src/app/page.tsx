"use client";
import React, { useEffect } from "react";
import { TaxonomyType } from "@/data/types";
import CardCategory from "@/components/CardCategory";
import SectionGridFeatureProperty from "./(home)/SectionProperty";

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "@/redux/store";
import { decrement, increment } from "@/redux/features/bookingSlice";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {
  const count = useSelector((state: RootState) => state.booking.value);
  const dispatch = useDispatch();

  return (
    <>
      <main className="relative overflow-hidden">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex">
              <CardCategory taxonomy={DEMO_CATS[0]} />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 grid grid-rows-2 gap-6">
              <CardCategory taxonomy={DEMO_CATS[3]} />
              <CardCategory taxonomy={DEMO_CATS[1]} />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex">
              <CardCategory taxonomy={DEMO_CATS[4]} />
            </div>
          </div>
          <div className="relative py-16">
            <SectionGridFeatureProperty />
          </div>
        </div>
      </main>

      {/* <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div> */}
    </>
  );
}

export default PageHome;
