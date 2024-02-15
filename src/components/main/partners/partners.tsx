import { DATA_PARTNERS } from "./data-partner";
import { PartnerItem } from "./partner-item";

const dataPartner = DATA_PARTNERS;

export function PartnersComp() {
  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center">Друзья и партнеры</h1>

        <div className="flex flex-wrap justify-center gap-x-20 mt-32 gap-y-20">
          {dataPartner &&
            dataPartner.map((item) => {
              return <PartnerItem key={item.id} stack={item} />;
            })}
        </div>
      </div>
    </section>
  );
}
