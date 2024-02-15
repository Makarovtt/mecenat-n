import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import IMask from "imask";
import { useEffect, useRef, useState } from "react";

interface Params {
  dataOrg: any;
  setDataOrg: any;
  setActiveBtn: any;
}

export function OrgPage2({ dataOrg, setDataOrg, setActiveBtn }: Params) {
  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
  };

  const refPhoneInput = useRef<HTMLInputElement | null>(null);
  if (refPhoneInput && refPhoneInput.current) {
    const mask = IMask(refPhoneInput.current!, maskOptions);
  }

  interface DataOrgActive {
    name: boolean;
    address: boolean;
    email: boolean;
    fio: boolean;
  }
  const [dataOrgActive, setDataOrgActive] = useState<DataOrgActive>({
    name: false,
    address: false,
    email: false,
    fio: false,
  });

  interface DataOrgErrors {
    name: string;
    address: string;
    email: string;
    fio: string;
  }
  const [dataOrgError, setDataOrgError] = useState<DataOrgErrors>({
    name: "мало буков",
    address: "мало буков",
    email: "мало буков",
    fio: "мало буков",
  });

  function blurInput(e: string) {
    switch (e) {
      case "nameOrg":
        setDataOrgActive({ ...dataOrgActive, name: true });
        break;
      case "addressOrg":
        setDataOrgActive({ ...dataOrgActive, address: true });
        break;
      case "emailOrg":
        setDataOrgActive({ ...dataOrgActive, email: true });
        break;
      case "fioOrg":
        setDataOrgActive({ ...dataOrgActive, fio: true });
        break;
    }
  }

  // Организация
  // =======================================================================================================>
  useEffect(() => {
    if (dataOrg.name.length > 2) {
      setDataOrgError({ ...dataOrgError, name: "" });
    } else {
      setDataOrgError({ ...dataOrgError, name: "мало букв" });
    }
    // eslint-disable-next-line
  }, [dataOrg.name]);

  function funcChangeNameOrg(symbol: string) {
    if (dataOrg.name.length < 60) {
      let regex = new RegExp("^[a-zA-Zsа-яА-Яs ]+$");
      if (regex.test(symbol) || symbol === "") {
        setDataOrg({ ...dataOrg, name: symbol });
      } else {
        setDataOrgError({ ...dataOrgError, name: "только буквы" });
      }
    } else {
      setDataOrgError({ ...dataOrgError, name: "много букв" });
    }
  }
  // =======================================================================================================>
  useEffect(() => {
    if (dataOrg.address.length > 2) {
      setDataOrgError({ ...dataOrgError, address: "" });
    } else {
      setDataOrgError({ ...dataOrgError, address: "мало букв" });
    }
    // eslint-disable-next-line
  }, [dataOrg.address]);

  function funcChangeAddressOrg(symbol: string) {
    if (dataOrg.address.length < 60) {
      let regex = new RegExp("^[a-zA-Zsа-яА-Яs0-9s ]+$");
      if (regex.test(symbol) || symbol === "") {
        setDataOrg({ ...dataOrg, address: symbol });
      } else {
        setDataOrgError({ ...dataOrgError, address: "только буквы и цифры" });
      }
    } else {
      setDataOrgError({ ...dataOrgError, address: "много букв" });
    }
  }
  // =======================================================================================================>
  useEffect(() => {
    let regex = new RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
    );
    if (regex.test(dataOrg.email)) {
      setDataOrgError({ ...dataOrgError, email: "" });
    } else {
      setDataOrgError({ ...dataOrgError, email: "неверный формат Email" });
    }
    // eslint-disable-next-line
  }, [dataOrg.email]);

  function funcChangeEmailOrg(symbol: string) {
    if (dataOrg.email.length < 60) {
      let regex = new RegExp("^[a-zA-Zs0-9s/_/-/./@/ ]+$");
      if (regex.test(symbol) || symbol === "") {
        setDataOrg({ ...dataOrg, email: symbol });
      } else {
        setDataOrgError({
          ...dataOrgError,
          email: "только латинские буквы и цифры, а также '_', '@', '.'",
        });
      }
    } else {
      setDataOrgError({ ...dataOrgError, email: "много букв" });
    }
  }
  // =======================================================================================================>
  useEffect(() => {
    if (dataOrg.fio.length > 2) {
      setDataOrgError({ ...dataOrgError, fio: "" });
    } else {
      setDataOrgError({ ...dataOrgError, fio: "мало букв" });
    }
    // eslint-disable-next-line
  }, [dataOrg.fio]);

  function funcChangeFioOrg(symbol: string) {
    if (dataOrg.fio.length < 60) {
      let regex = new RegExp("^[a-zA-Zsа-яА-Яs ]+$");
      if (regex.test(symbol) || symbol === "") {
        setDataOrg({ ...dataOrg, fio: symbol });
      } else {
        setDataOrgError({ ...dataOrgError, fio: "только буквы" });
      }
    } else {
      setDataOrgError({ ...dataOrgError, fio: "много букв" });
    }
  }
  // =======================================================================================================>

  useEffect(() => {
    if (
      dataOrgError.name === "" &&
      dataOrgError.address === "" &&
      dataOrgError.email === "" &&
      dataOrgError.fio === ""
    ) {
      setActiveBtn(false);
    } else {
      setActiveBtn(true);
    }
    // eslint-disable-next-line
  }, [dataOrgError]);

  return (
    <>
      <div className="mt-7 mb-12">Юридическое лицо</div>
      {/* =======================================================================================================> */}
      <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
        <Label htmlFor="name-org">
          Название организации <span className="text-red-500">*</span>
        </Label>
        <Input
          type="text"
          id="name-org"
          placeholder="Название организации"
          name="nameOrg"
          value={dataOrg.name}
          onBlur={(e) => blurInput(e.target.name)}
          onChange={(e) => funcChangeNameOrg(e.target.value)}
        />
        {dataOrgError.name && dataOrgActive.name && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{dataOrgError.name}</AlertDescription>
          </Alert>
        )}
      </div>
      {/* =======================================================================================================> */}
      <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
        <Label htmlFor="adress-org">
          Адрес <span className="text-red-500">*</span>
        </Label>
        <Input
          type="text"
          id="adress-org"
          placeholder="Адрес"
          name="addressOrg"
          value={dataOrg.address}
          onBlur={(e) => blurInput(e.target.name)}
          onChange={(e) => funcChangeAddressOrg(e.target.value)}
        />
        {dataOrgError.address && dataOrgActive.address && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{dataOrgError.address}</AlertDescription>
          </Alert>
        )}
      </div>
      {/* =======================================================================================================> */}
      <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
        <Label htmlFor="email-org">
          Электронная почта <span className="text-red-500">*</span>
        </Label>
        <Input
          type="email"
          id="email-org"
          placeholder="Электронная почта"
          name="emailOrg"
          value={dataOrg.email}
          onBlur={(e) => blurInput(e.target.name)}
          onChange={(e) => funcChangeEmailOrg(e.target.value)}
        />
        {dataOrgError.email && dataOrgActive.email && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{dataOrgError.email}</AlertDescription>
          </Alert>
        )}
      </div>
      {/* =======================================================================================================> */}
      <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
        <Label htmlFor="fio-org">
          ФИО руководителя организации <span className="text-red-500">*</span>
        </Label>
        <Input
          type="text"
          id="fio-org"
          placeholder="ФИО руководителя организации"
          name="fioOrg"
          value={dataOrg.fio}
          onBlur={(e) => blurInput(e.target.name)}
          onChange={(e) => funcChangeFioOrg(e.target.value)}
        />
        {dataOrgError.fio && dataOrgActive.fio && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{dataOrgError.fio}</AlertDescription>
          </Alert>
        )}
      </div>
      {/* =======================================================================================================> */}
      <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
        <Label htmlFor="phone-org">Телефон</Label>
        <Input
          type="text"
          ref={refPhoneInput}
          id="phone-org"
          placeholder="+7"
          value={dataOrg.phone}
          onChange={(e) => setDataOrg({ ...dataOrg, phone: e.target.value })}
        />
      </div>
    </>
  );
}
