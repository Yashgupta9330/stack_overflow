"use client"
import React from "react";
import Image from "next/image";
import { SignedOut } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

export const NavContent = () => {
    const pathName=usePathname();
  return (
    <section className="flex h-full flex-col gap-5 pt-10 ">
     {
  sidebarLinks.map((item) => {
    const isActive =
      (pathName.includes(item.route) && item.route.length > 1) ||
      pathName === item.route;

    return (
      <SheetClose key={item.route}>
        <Link href={item.route} className={`${isActive?"primary-gradient rounded-lg text-light-900":"text-dark300_light900"}
     flex items-center justify-start gap-4 bg-transparent p-4 border-none`}>
          <Image src={item.imgURL} alt={item.label} width={20} height={20} className={`${isActive?"":"invert-colors"}`} />
          <p className={`${isActive?"base-bold":"base-medium"}`}>{item.label}</p>
        </Link>
      </SheetClose>
    );
  })
}

    </section>
  )
};
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="menu"
          height={36}
          width={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link rel="stylesheet" className="flex items-center gap-1" href="/">
          <Image
            src="/assets/images/site-logo.svg"
            alt="DEVFLOW"
            height={23}
            width={23}
            className=""
          />
          <p className="h2-bold font-SpaceGrotesk text-dark-100_light900">
            Dev
            <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <SignedOut>
            <div className="flex flex-col gap-3 mb-9">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary w-full min-h-[41px] px-4 py-3  rounded-lg  shadow-none">
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium light-border-2 btn-tertiary w-full text-dark400_light900 rounded-lg shadow-none min-h-[41px]  px-4 py-3">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
