"use client";

import { useState } from "react";
import { QuizPage1 } from "./quiz-page-1";
import { QuizPage2 } from "./quiz-page-2";
import { QuizPage3 } from "./quiz-page-3";
import { QuizPage4 } from "./quiz-page-4";

interface Options {
  onClose: any;
}

export function QuizGetHelp({ onClose }: Options) {
  const [activePage, setActivePage] = useState<number>(1);
  const [selectedOrg, setSelectedOrg] = useState<string>("option-1");

  interface DataDopInfo {
    description: string;
    file: string;
  }
  const [dataDop, setDataDop] = useState<DataDopInfo>({
    description: "",
    file: "",
  });

  interface DataHuman {
    fio: string;
    phone: string;
    email: string;
    address: string;
  }
  const [dataHuman, setDataHuman] = useState<DataHuman>({
    fio: "",
    phone: "",
    email: "",
    address: "",
  });

  interface DataOrganisation {
    name: string;
    address: string;
    email: string;
    fio: string;
    phone: string;
  }
  const [dataOrg, setDataOrg] = useState<DataOrganisation>({
    name: "",
    address: "",
    email: "",
    fio: "",
    phone: "",
  });

  function funcOnOptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedOrg(event.target.value);
  }
  function funcOnNextPage() {
    setActivePage((actual) => actual + 1);
  }

  function funcOnPrevPage() {
    setActivePage((actual) => actual - 1);
  }

  async function funcSendMail() {
    // if (!dataDop.file) return;

    // try {
    //   const data = new FormData();
    //   data.set("file", dataDop.file);

    //   const res = await fetch("https://меценат-н.рф/sendmail/sendmail.php", {
    //     method: "POST",
    //     body: data,
    //   });
    //   const answer = await res.json();
    //   console.log(answer);
    //   // handle the error
    //   if (!res.ok) throw new Error(await res.text());
    // } catch (e: any) {
    //   // Handle errors here
    //   console.error(e);
    // }

    const data = new FormData();

    if (selectedOrg === "option-1") {
      data.append("organisation", "Физическое лицо");

      data.append("fio", dataHuman.fio);
      data.append("phone", dataHuman.phone);
      data.append("email", dataHuman.email);
      data.append("address", dataHuman.address);
    } else if (selectedOrg === "option-2") {
      data.append("organisation", "Юридическое лицо");

      data.append("name", dataOrg.name);
      data.append("fio", dataOrg.fio);
      data.append("phone", dataOrg.phone);
      data.append("address", dataOrg.address);
      data.append("email", dataOrg.email);
    }
    data.append("description", dataDop.description);
    data.append("file", dataDop.file);

    const res = await fetch("https://меценат-н.рф/sendmail/sendmail.php", {
      method: "POST",
      body: data,
    });
    const answer = await res.json();
    console.log(answer);
    if (answer === 1) {
      setActivePage((actual) => actual + 1);
    }
  }

  const renderPage = (activePage: Number) => {
    switch (activePage) {
      case 1:
        return (
          <QuizPage1
            funcOnNextPage={funcOnNextPage}
            funcOnOptionChange={funcOnOptionChange}
            selectedOrg={selectedOrg}
            onClose={onClose}
          />
        );
      case 2:
        return (
          <QuizPage2
            funcOnNextPage={funcOnNextPage}
            funcOnPrevPage={funcOnPrevPage}
            selectedOrg={selectedOrg}
            onClose={onClose}
            setDataHuman={setDataHuman}
            dataHuman={dataHuman}
            dataOrg={dataOrg}
            setDataOrg={setDataOrg}
          />
        );
      case 3:
        return (
          <QuizPage3
            funcSendMail={funcSendMail}
            funcOnPrevPage={funcOnPrevPage}
            onClose={onClose}
            setDataDop={setDataDop}
            dataDop={dataDop}
          />
        );
      case 4:
        return <QuizPage4 onClose={onClose} />;
      default:
        return null;
    }
  };
  const activePageRender = renderPage(activePage);
  return (
    <div>
      <h1 className="text-center text-4xl">Как получить помощь</h1>
      {activePageRender}
    </div>
  );
}
