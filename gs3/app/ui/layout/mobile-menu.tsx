"use client";
import React, { useState, useEffect, FC } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CategoryListProps } from "@/app/lib/definitions";
import Search from "./search";
const Categories: FC<CategoryListProps> = ({ data }) => {
  return (
    <div className="mt-14 flex flex-col gap-3">
      <Search />
      {data?.map((data) => (
        <div key={data.category_id} className="text-lg	font-medium">
          <Link href={`busqueda${data.category_link}`}>{data.category_name}</Link>
        </div>
      ))}
    </div>
  );
};

export default function MobileMenu({ data }: Readonly<CategoryListProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let q = searchParams.get("q");

  const handleOpenHamburgerMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, q]);

  return (
    <div className="sm:hidden">
      <button
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700"
        onClick={handleOpenHamburgerMenu}
      >
        <Bars3Icon className="h-4" />
      </button>

      <div
        className={`${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-all transform duration-500 ease-in-out bg-white absolute h-screen w-full top-0 left-0 shadow-xl z-40  p-4 lg:px-6  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          aria-label="Close mobile menu"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 float-right"
          onClick={handleOpenHamburgerMenu}
        >
          <XMarkIcon className="h-4" />
        </button>

        <Categories data={data} />
      </div>
    </div>
  );
}
