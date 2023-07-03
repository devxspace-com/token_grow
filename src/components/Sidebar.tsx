/** @format */

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// import img from "next/img";

interface props {
  pathname: string | null;
}
export default function Sidebar() {
  const pathname: any = usePathname();

  const menu = [
    {
      href: "/dashboard",
      name: "Home",
      icon: <img src="../menuIcon/Vector.svg" alt="" className="" />,
      iconActive: <img src="../menuIcon/Vector (1).svg" alt="" />,
    },
    {
      href: "/invest",
      name: "Invest",
      icon: <img src="../menuIcon/Group.svg" alt="" />,
      iconActive: <img src="../menuIcon/Group (1).svg" alt="" />,
    },
    {
      href: "/activity",
      name: "Activity",
      icon: <img src="../menuIcon/feActivity1.svg" alt="" />,
      iconActive: <img src="../menuIcon/feActivity1 (1).svg" alt="" />,
    },
    {
      href: "/notification",
      name: "Notification",
      icon: <img src="../menuIcon/Vector (2).svg" alt="" />,
      iconActive: <img src="../menuIcon/Vector (4).svg" alt="" />,
    },
  ];
  const menu2 = [
    {
      href: "/",
      name: "Exit",
      icon: <img src="../menuIcon/Vector (3).svg" alt="" />,
      iconActive: <img src="../menuIcon/Vector (3).svg" alt="" />,
    },
  ];

  return (
    <main className="">
      <div className="h-full min-h-screen max-h-[100%]  bg-[#000019] pl-[70px] smDesk:pl-[35px]">
        <div className="pt-[40px] mb-[100px]">
          <Link
            href="/dashboard"
            className="text-[28px] leading-5 font-bold text-[#FFFF] logo "
          >
            Grow<span className="text-[#F18500]">Token</span>
          </Link>
        </div>
        <div className=" flex flex-col gap-10">
          {menu.map((item, index) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                href={item.href}
                key={index}
                className={
                  isActive
                    ? "text-[#FFFFFF] flex gap-2 items-center text-[16px] leading-5 border-r-2 rounded-[5px] w-[120px] border-[#F18500]"
                    : "text-[#FFF] flex gap-2 items-center text-[16px] leading-5"
                }
              >
                {isActive ? (
                  <span>{item.iconActive}</span>
                ) : (
                  <span>{item.icon}</span>
                )}
                <span>{item.name}</span>
              </Link>
              // </li>
            );
          })}
        </div>
        <div className=" flex flex-col mt-10">
          {menu2.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                className={
                  "text-[#D61F1F] flex gap-2 items-center text-[16px] leading-5"
                }
              >
                <span>{item.icon}</span>

                <span>{item.name}</span>
              </Link>
              // </li>
            );
          })}
        </div>
      </div>
    </main>
  );
}
