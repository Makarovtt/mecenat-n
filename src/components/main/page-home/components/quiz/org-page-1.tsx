import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import IMask from "imask";
import { useEffect, useRef, useState } from "react";

interface Params {
  dataHuman: any;
  setDataHuman: any;
  setActiveBtn: any;
}

export function OrgPage1({ dataHuman, setDataHuman, setActiveBtn }: Params) {
  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
  };

  const refPhoneInput = useRef<HTMLInputElement | null>(null);
  if (refPhoneInput && refPhoneInput.current) {
    const mask = IMask(refPhoneInput.current!, maskOptions);
  }

  interface DataHumanActive {
    fio: boolean;
    phone: boolean;
  }
  const [dataHumanActive, setDataHumanActive] = useState<DataHumanActive>({
    fio: false,
    phone: false,
  });

  interface DataHumanErrors {
    fio: string;
    phone: string;
  }
  const [dataHumanErrors, setDataHumanErrors] = useState<DataHumanErrors>({
    fio: "мало буков",
    phone: "мало буков",
  });

  function blurInput(e: string) {
    switch (e) {
      case "fio":
        setDataHumanActive({ ...dataHumanActive, fio: true });
        break;
      case "phone":
        setDataHumanActive({ ...dataHumanActive, phone: true });
        break;
    }
  }

  useEffect(() => {
    if (dataHuman.fio.length > 2) {
      setDataHumanErrors({ ...dataHumanErrors, fio: "" });
    } else {
      setDataHumanErrors({ ...dataHumanErrors, fio: "мало букв" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataHuman.fio]);

  function funcChangeFio(symbol: string) {
    if (dataHuman.fio.length < 60) {
      let regex = new RegExp("^[a-zA-Zsа-яА-Яs ]+$");
      if (regex.test(symbol) || symbol === "") {
        setDataHuman({ ...dataHuman, fio: symbol });
      } else {
        setDataHumanErrors({ ...dataHumanErrors, fio: "мало букв" });
      }
    } else {
      setDataHumanErrors({ ...dataHumanErrors, fio: "много букв" });
    }
  }

  useEffect(() => {
    if (dataHuman.phone.length === 18) {
      setDataHumanErrors({ ...dataHumanErrors, phone: "" });
    } else {
      setDataHumanErrors({ ...dataHumanErrors, phone: "неверный формат" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataHuman.phone]);

  function funcChangePhone(symbol: string) {
    setDataHuman({ ...dataHuman, phone: symbol });
  }

  useEffect(() => {
    if (dataHumanErrors.fio === "" && dataHumanErrors.phone === "") {
      setActiveBtn(false);
    } else {
      setActiveBtn(true);
    }
    // eslint-disable-next-line
  }, [dataHumanErrors]);
  return (
    <>
      <div className="mt-7 mb-12">Физическое лицо</div>
      <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
        <Label htmlFor="fio-human">
          ФИО <span className="text-red-500">*</span>
        </Label>
        <Input
          type="text"
          name="fio"
          placeholder="ФИО"
          value={dataHuman.fio}
          onBlur={(e) => blurInput(e.target.name)}
          onChange={(e) => funcChangeFio(e.target.value)}
        />
        {dataHumanErrors.fio && dataHumanActive.fio && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{dataHumanErrors.fio}</AlertDescription>
          </Alert>
        )}
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
        <Label htmlFor="phone-human">
          Телефон <span className="text-red-500">*</span>
        </Label>
        <Input
          ref={refPhoneInput}
          type="text"
          name="phone"
          id="phone-human"
          placeholder="+7"
          value={dataHuman.phone}
          onBlur={(e) => blurInput(e.target.name)}
          onChange={(e) => funcChangePhone(e.target.value)}
        />
        {dataHumanErrors.phone && dataHumanActive.phone && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{dataHumanErrors.phone}</AlertDescription>
          </Alert>
        )}
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
        <Label htmlFor="email-human">Электронная почта</Label>
        <Input
          type="email"
          id="email-human"
          placeholder="Электронная почта"
          onChange={(e) =>
            setDataHuman({ ...dataHuman, email: e.target.value })
          }
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
        <Label htmlFor="adress-human">Адрес</Label>
        <Input
          type="text"
          id="adress-human"
          placeholder="Адрес"
          onChange={(e) =>
            setDataHuman({ ...dataHuman, address: e.target.value })
          }
        />
      </div>
    </>
  );
}
