import { DATA_DOCUMENTS } from "@/components/data/data-documents";
import { DocumentsItem } from "./documents-item";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const dataDocuments = DATA_DOCUMENTS;
interface DataStack {
  id: number;
  title: string;
  href: string;
  type: string[];
  icon: string | StaticImport;
}
interface Type {
  type: string;
  title: string;
}
export function Documents({ type, title }: Type) {
  return (
    <section className="my-28">
      <div className="max-w-7xl mx-auto">
        <h1>{title}</h1>
        <div className="my-20">
          <ul className="flex justify-center gap-8 flex-wrap">
            {dataDocuments &&
              dataDocuments.map((item: DataStack) => {
                if (item.type.includes(type)) {
                  return <DocumentsItem key={item.id} dataStack={item} />;
                }
                return;
              })}
          </ul>
        </div>
      </div>
    </section>
  );
}
