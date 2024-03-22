'use client';
import React from 'react';
import ConnectWallet from './ConnectWallet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = (): React.JSX.Element => {
  const path = usePathname();

  return (
    <nav className="max-w-[1204px] w-[90vw] relative top-0 left-0 flex items-center justify-between bg-inherit p-2 border-2 border-[#252525] rounded-[12px]">
      <Link href="/">
        <h1 className="sm:text-2xl text-xl font-semibold p-1.5">
          Universal Faucet
        </h1>
      </Link>
      <ul className="sm:flex flex-row hidden items-center justify-between space-x-10">
        <li className={`${path === "/faucet" ? "text-[#EAEAEA]" : "text-[#606060]"}`}>
          <Link href="/faucet">
            <p>Faucet</p>
          </Link>
        </li>
        <li className={`${path === "/status" ? "text-[#EAEAEA]" : "text-[#606060]"}`}>
          <Link href="/status">
            <p>Status</p>
          </Link>
        </li>
      </ul>
      <ConnectWallet />
    </nav>
  );
};

export default Navbar;