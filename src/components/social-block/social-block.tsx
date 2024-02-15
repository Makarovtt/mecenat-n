import Image from "next/image";
import { SOCIAL_NETWORK } from "../data/data";
import Link from "next/link";

export function SocialBlock() {
  return (
    <ul className="list-none ml-0 p-0 my-5 flex justify-center items-center">
      {SOCIAL_NETWORK &&
        SOCIAL_NETWORK.map((item) => {
          if (item.show === true) {
            return (
              <li key={item.id} className="mx-3">
                <Link href={item.href} target="_blank">
                  <Image
                    src={item.src}
                    alt={`Иконка ${item.title}`}
                    quality={100}
                    priority={false}
                  />
                </Link>
              </li>
            );
          }
        })}
    </ul>
  );
}
