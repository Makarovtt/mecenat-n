import { Home, Mail, Phone } from "lucide-react";
import { SocialBlock } from "../social-block/social-block";
import { Requisits } from "./requisits";

export function Contacts() {
  return (
    <section>
      <div className="max-w-7xl mx-auto my-28">
        <h1 className="mb-16">Контакты</h1>

        <div>
          <span>Электронная почта для заявок:</span>
          <div className="flex justify-start items-start ml-6 my-6">
            <Mail className="text-sky-500" />
            <span className="ml-5 font-semibold">
              E-mail: Maecenas-N@mail.ru
            </span>
          </div>
        </div>

        <div>
          <span>Телефон:</span>
          <div className="flex justify-start items-start ml-6 my-6">
            <Phone className="text-sky-500" />
            <span className="ml-5 font-semibold">+7 (961) 816-70-92</span>
          </div>
        </div>

        <div>
          <span>Юр. Адрес:</span>
          <div className="flex justify-start items-start ml-6 my-6">
            <Home className="text-sky-500" />
            <span className="ml-5 font-semibold">
              г. Астрахань, ул. Дантона, строение 4/3
            </span>
          </div>
        </div>

        <div>
          <span>Социальные сети:</span>
          <div className="ml-3 font-semibold max-w-24">
            <SocialBlock />
          </div>
        </div>

        <div>
          <span>Реквизиты:</span>
          <Requisits />
        </div>
      </div>
    </section>
  );
}
