import { Button } from "@/components/ui/button";
interface Props {
  answerSendForm: string;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
}
export function ResultSendform({ answerSendForm, onClose }: Props) {
  return (
    <>
      <div className="flex justify-center items-center text-cyan-700 font-2xl h-40">
        {answerSendForm}
      </div>
      <div className="flex justify-center">
        <Button onClick={onClose}>Закрыть</Button>
      </div>
    </>
  );
}
