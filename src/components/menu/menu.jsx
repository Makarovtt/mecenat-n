import classes from "./styles/menu.module.css";
import { DATA_MENU } from "../data/data";
import React from "react";
import Link from "next/link";

export function Menu() {
  return (
    <section className={classes.menu}>
      <div className={classes.menu_block}>
        <ul className={classes.menu_list}>
          {DATA_MENU.map((i) => {
            return (
              <li key={i.id}>
                <Link href={i.href}>{i.title}</Link>
                {i.submenu[0].id && (
                  <div className={classes.wrap_block_submenu}>
                    <ul className={classes.submenu_list}>
                      {i.submenu.map((l) => {
                        return (
                          <li key={l.id}>
                            <Link href={l.href}>{l.title}</Link>
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
