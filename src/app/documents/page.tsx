import { Documents } from "@/components/main/documents/documents";

export default function Home() {
  const type: string = "all";
  const title: string = "Все документы";
  return (
    <> 
      <Documents type={type} title={title} />
    </>
  );
}
