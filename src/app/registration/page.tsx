import { Documents } from "@/components/main/documents/documents";

export default function Home() {
  const type: string = "registration";
  const title: string = "Уставные документы";
  return (
    <>
      <Documents type={type} title={title} />
    </>
  );
}
