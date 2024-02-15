import { Documents } from "@/components/main/documents/documents";

export default function Home() {
  const type: string = "oferta";
  const title: string = "Публичный договор оферты";
  return (
    <>
      <Documents type={type} title={title} />
    </>
  );
}
