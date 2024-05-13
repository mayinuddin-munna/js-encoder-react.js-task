import React, { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import Link from "next/link";

export interface MainNav1Props {
  className?: string;
}

const Nav: FC<MainNav1Props> = ({ className = "" }) => {
  return (
    <div className={`relative z-10 ${className}`}>
      <div className="px-4 lg:container h-20 relative flex justify-between">
        <div className="hidden md:flex justify-start flex-1 space-x-4 sm:space-x-10">
          <Link href="/" className="w-24 self-center" >LOGO</Link>
        </div>

        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex space-x-0.5">
            <SwitchDarkMode />

            <div className="px-1" />
            <ButtonPrimary className="self-center" href="/login">
              Sign up
            </ButtonPrimary>
          </div>

          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
