"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/utils";
 import Link from "next/link";
export const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
 
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 4www", className)}
>
  <Menu setActive={setActive}>
    <Link href={"/"}>
    <MenuItem setActive={setActive} active={active} item="Home">
    
    </MenuItem>
    </Link>
     <MenuItem setActive={setActive} active={active} item="Our Courses">
    <div className="flex flex-col space-y-4 text-sm">
    <HoveredLink href="/courses">All Courses</HoveredLink>
    <HoveredLink href="/courses">JavaScript</HoveredLink>
    <HoveredLink href="/courses">Css</HoveredLink>
    <HoveredLink href="/courses">React</HoveredLink>
    <HoveredLink href="/courses">Next</HoveredLink>
    <HoveredLink href="/courses">Express</HoveredLink>
    <HoveredLink href="/courses">MongoDB</HoveredLink>
      </div>
    </MenuItem>
    <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact us">
       </MenuItem>
    </Link>
  </Menu>
</div>

  )
}

export default Navbar
