import { Documents } from "@/components/main/documents/documents";

export default function Home() {
  const type: string = "personal_data";
  const title: string = "Политика обработки персональных данных";
  return (
    <>
      <Documents type={type} title={title} />
    </>
  );
}
