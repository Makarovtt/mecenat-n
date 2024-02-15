import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface DataStack {
  dataStack: {
    id: number;
    title: string;
    href: string;
    icon: string | StaticImport;
  };
}

export function DocumentsItem({ dataStack }: DataStack) {
  return (
    <li
      className="text-sky-700 p-4 w-52 h-80 flex items-center 
                    justify-between flex-col rounded-lg border
                     border-sky-700 shrink-0 hover:bg-sky-100 transition-all"
    >
      <div className="text-center text-xl font-medium hyphens-auto h-48 line-clamp-7 overflow-hidden">
        {dataStack.title}
      </div>
      <div className="opacity-50 hover:opacity-90 transition-opacity">
        <Link href={dataStack.href} target="_blank">
          <Image
            src={dataStack.icon}
            alt={`Документ — ${dataStack.title}`}
            className="w-14"
            quality={100}
          />
        </Link>
      </div>
    </li>
  );
}
