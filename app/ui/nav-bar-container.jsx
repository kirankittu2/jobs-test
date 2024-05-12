"use client";

import { useState } from "react";
import { MegaMenu } from "./mega-menu";
import Navbar from "./nav-bar";

export default function NavBarContainer() {
  const [servicesHovered, setServiceHovered] = useState(false);

  return (
    <>
      <Navbar
        setServiceHovered={setServiceHovered}
        servicesHovered={servicesHovered}
      />
      {servicesHovered && (
        <MegaMenu
          setServiceHovered={setServiceHovered}
          servicesHovered={servicesHovered}
        />
      )}
    </>
  );
}
