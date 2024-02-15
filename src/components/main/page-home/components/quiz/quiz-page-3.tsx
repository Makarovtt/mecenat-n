import { Textarea } from "@/components/ui/textarea";
import { QUIZ_STATE } from "./quiz-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const data = QUIZ_STATE.page3;
interface Params {
  funcSendMail: any;
  onClose: any;
  funcOnPrevPage: any;
  setDataDop: any;
  dataDop: any;
}

export function QuizPage3({
  funcSendMail,
  onClose,
  funcOnPrevPage,
  setDataDop,
  dataDop,
}: Params) {
  return (
    <>
      <h2 className="text-cyan-600 text-xl mt-5 ">{data.title}</h2>
      <div className="mt-7 mb-12">
        <Textarea
          placeholder="Опишите проблему"
          onChange={(e) =>
            setDataDop({ ...dataDop, description: e.target.value })
          }
        />
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-8">
          <Label htmlFor="picture">Прикрепите фото или видео</Label>
          <Input
            id="picture"
            type="file"
            onChange={(e) =>
              setDataDop({ ...dataDop, file: e.target.files?.[0] })
            }
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={onClose} variant="outline">
          Отмена
        </Button>
        <div className="flex justify-end gap-x-2">
          <Button onClick={funcOnPrevPage} variant="outline">
            Назад
          </Button>
          <Button onClick={funcSendMail}>Отправить</Button>
        </div>
      </div>
    </>
  );
}
