"use client";

import React from "react";
import { useThemeMode } from "@/utils/useThemeMode";
import Nav from "./Nav";

const SiteHeader = () => {
  useThemeMode();

  return (
    <>
      <Nav className="shadow-sm dark:border-b dark:border-neutral-700" />
    </>
  );
};

export default SiteHeader;
