"use client";

import { SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { ResultSendform } from "./result-sendform";

const formSchema = z
  .object({
    username: z
      .string()
      .min(1, {
        message: "Обязательное поле",
      })
      .min(3, {
        message: "Введите более 2 символов",
      })
      .max(40, {
        message: "Много символов",
      }),
    useremail: z
      .string()
      .min(1, {
        message: "Обязательное поле",
      })
      .max(40, {
        message: "Много символов",
      })
      .email({
        message: "Неверный формат",
      }),
    usertext: z
      .string()
      .min(1, {
        message: "Обязательное поле",
      })
      .min(21, {
        message: "Введите более 20 символов",
      })
      .max(250, {
        message: "Много символов",
      }),
    agree: z.boolean().default(true).optional(),
  })
  .refine((data) => data.agree === true, {
    path: ["agree"],
    message: "Согласие с условиями",
  });

interface Props {
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
}

export function Feedback({ onClose }: Props) {
  const [answerSendForm, setAnswerSendForm] = useState<string>("");
  // const [answerSendForm, setAnswerSendForm] = useState<string>('');
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      useremail: "",
      usertext: "",
      agree: true,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    interface DataGet {
      agree: boolean;
      useremail: string;
      username: string;
      usertext: string;
    }
    const data = new FormData();

    data.append("agree", String(values.agree));
    data.append("useremail", values.useremail);
    data.append("username", values.username);
    data.append("usertext", values.usertext);

    const res = await fetch("https://меценат-н.рф/sendmail/sendmail.php", {
      method: "POST",
      body: data,
    });

    const answer = await res.json();
    switch (answer) {
      case 0:
        setAnswerSendForm("Ошибка. Поля для заполнения оказались пусты");
        break;
      case 1:
        setAnswerSendForm("Ошибка. Не согласились с условиями");
        break;
      case 2:
        setAnswerSendForm("Произошла ошибка при отправке формы");
        break;
      case 3:
        setAnswerSendForm("Спасибо. Ваше сообщение отправлено");
        break;
      default:
        setAnswerSendForm("Неизвестная ошибка");
    }
  }

  return (
    <>
      <h1 className="text-center text-4xl">Обратная связь</h1>
      {!answerSendForm && (
        <div className="my-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex justify-between items-start">
                <div className="py-2 pr-3 w-1/2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Ваше имя *"
                            {...field}
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="py-2 pl-3 w-1/2">
                  <FormField
                    control={form.control}
                    name="useremail"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Ваше email *"
                            {...field}
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="usertext"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Сообщение *"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between items-center">
                <div className="justify-between items-center">
                  <div className="mr-8">
                    <FormField
                      control={form.control}
                      name="agree"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormDescription>
                              Я даю{" "}
                              <Link
                                href="/documents/agree_personal_data.pdf"
                                className="text-cyan-500 hover:underline"
                                target="_blank"
                              >
                                согласие
                              </Link>{" "}
                              на обработку персональных данных в соотвествии с{" "}
                              <Link
                                href="/documents/personal_data.pdf"
                                className="text-cyan-500 hover:underline"
                                target="_blank"
                              >
                                Политикой
                              </Link>{" "}
                              по обработке персональных данных{" "}
                            </FormDescription>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <Button type="submit">Отправить</Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      )}
      {answerSendForm && (
        <ResultSendform onClose={onClose} answerSendForm={answerSendForm} />
      )}
    </>
  );
}
