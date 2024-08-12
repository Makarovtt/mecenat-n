import { DATA_MENU } from "../data/data";
import React from "react";
import Link from "next/link";

export function Menu() {
  return (
    <section className="bg-white sticky top-0 shadow z-10">
      <div className="pt-[15px] px-[15px]">
        <ul className="flex items-center justify-center list-none no-underline m-0">
          {DATA_MENU.map((i) => {
            return (
              <li key={i.id} className="relative group">
                <Link
                  href={i.href}
                  className="no-underline block pt-[7px] px-[15px] pb-[22px]
                text-black font-bold hover:underline"
                >
                  {i.title}
                </Link>
                {i.submenu[0].id && (
                  <div
                    className="overflow-hidden absolute w-[400px] h-0 transition
                  group-hover:h-[300px]"
                  >
                    <ul
                      className="absolute bg-[#eff5fc] list-none w-[300px] m-0 p-[10px]
                    text-[0.8em] shadow invisible opacity-0 transition top-[-35px]
                    group-hover:opacity-100 group-hover:visible group-hover:top-0"
                    >
                      {i.submenu.map((l) => {
                        return (
                          <li key={l.id}>
                            <Link
                              href={l.href}
                              className="text-[#555555] block pt-[7px] px-[15px] pb-[22px]
                              font-bold hover:underline"
                            >
                              {l.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
