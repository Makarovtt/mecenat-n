import { QUIZ_STATE } from "./quiz-data";
import { Button } from "@/components/ui/button";

const data = QUIZ_STATE.page1;
interface Params {
  onClose: any;
}

export function QuizPage4({ onClose }: Params) {
  return (
    <>
      <div className="mt-7 mb-12">Спасибо! Заявка отправлена.</div>

      <div className="flex justify-between">
        <div></div>
        <div className="flex justify-end gap-x-2">
          <Button onClick={onClose}>Закрыть</Button>
        </div>
      </div>
    </>
  );
}
