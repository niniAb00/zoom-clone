"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Mobilenav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[246px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
            alt="yoom"
          />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="border-none bg-dark-1 w-fit pl-[30px]"
        >
          {" "}
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Yoom logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">Yoom</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col  justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {" "}
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.routr ||
                    pathname.startsWith(`${link.routr}/`);

                  return (
                    <SheetClose asChild key={link.routr}>
                      <Link
                        href={link.routr}
                        key={link.lable}
                        className={cn(
                          "flex gap-4 links-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={link.imgurl}
                          alt={link.lable}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{link.lable}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Mobilenav;
