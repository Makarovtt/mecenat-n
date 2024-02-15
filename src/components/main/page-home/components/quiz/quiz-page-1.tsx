import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QUIZ_STATE } from "./quiz-data";
import { Button } from "@/components/ui/button";

const data = QUIZ_STATE.page1;
interface Params {
  funcOnNextPage: any;
  funcOnOptionChange: any;
  selectedOrg: string;
  onClose: any;
}

export function QuizPage1({
  funcOnNextPage,
  funcOnOptionChange,
  selectedOrg,
  onClose,
}: Params) {
  return (
    <>
      <h2 className="text-cyan-600 text-xl mt-5 ">{data.title}</h2>
      <div className="mt-7 mb-12">
        <RadioGroup defaultValue={selectedOrg}>
          {data.items.map((item) => {
            return (
              <div className="flex items-center space-x-2" key={item.id}>
                <RadioGroupItem
                  value={`option-${item.id}`}
                  id={`option-${item.id}`}
                  onClick={funcOnOptionChange}
                />
                <Label htmlFor={`option-${item.id}`} className="text-sm">
                  {item.title}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      </div>

      <div className="flex justify-between">
        <Button onClick={onClose} variant="outline">
          Отмена
        </Button>
        <div className="flex justify-end gap-x-2">
          <Button onClick={funcOnNextPage}>Продолжить</Button>
        </div>
      </div>
    </>
  );
}
