import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from "@clerk/nextjs";
import Theme from './Theme';
import MobileNav from './MobileNav';
import GlobalSearch from '../search/GlobalSearch';


const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 background-light900_dark300 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link className="flex items-center gap-1" href="/" >
        <Image src="/assets/images/site-logo.svg" width={23} height={23} alt="Devflow"/>
        <p className="h2-bold font-SpaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
             Dev
        <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
        <GlobalSearch />
       <div className="flex-between gap-5">
             <Theme />
             <SignedIn>
             <UserButton afterSignOutUrl="/"/>
             </SignedIn>
             <MobileNav />
       </div>
    </nav>
  )
}

export default Navbar
