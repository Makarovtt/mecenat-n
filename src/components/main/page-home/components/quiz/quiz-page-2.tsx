import { QUIZ_STATE } from "./quiz-data";
import { Button } from "@/components/ui/button";
import { OrgPage1 } from "./org-page-1";
import { OrgPage2 } from "./org-page-2";
import { useState } from "react";

const data = QUIZ_STATE.page2;
interface Params {
  funcOnNextPage: any;
  selectedOrg: string;
  funcOnPrevPage: any;
  onClose: any;
  dataHuman: any;
  setDataHuman: any;
  dataOrg: any;
  setDataOrg: any;
}

export function QuizPage2({
  funcOnNextPage,
  selectedOrg,
  funcOnPrevPage,
  onClose,
  dataHuman,
  setDataHuman,
  dataOrg,
  setDataOrg,
}: Params) {
  // =======================================================================================>
  const [activeBtn, setActiveBtn] = useState<boolean>(true);

  const renderPage = (selectedOrg: string) => {
    switch (selectedOrg) {
      case "option-1":
        return (
          <OrgPage1
            dataHuman={dataHuman}
            setDataHuman={setDataHuman}
            setActiveBtn={setActiveBtn}
          />
        );
      case "option-2":
        return (
          <OrgPage2
            dataOrg={dataOrg}
            setDataOrg={setDataOrg}
            setActiveBtn={setActiveBtn}
          />
        );
      default:
        return null;
    }
  };
  const activePageRender = renderPage(selectedOrg);

  return (
    <>
      <h2 className="text-cyan-600 text-xl mt-5 ">{data.title}</h2>
      <div className="mt-7 mb-12">{activePageRender}</div>

      <div className="flex justify-between">
        <Button onClick={onClose} variant="outline">
          Отмена
        </Button>
        <div className="flex justify-end gap-x-2">
          <Button onClick={funcOnPrevPage} variant="outline">
            Назад
          </Button>
          <Button onClick={funcOnNextPage} disabled={activeBtn}>
            Продолжить
          </Button>
        </div>
      </div>
    </>
  );
}
