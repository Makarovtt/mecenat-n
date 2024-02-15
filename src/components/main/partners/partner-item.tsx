import Image, { StaticImageData } from "next/image";

interface User {
  stack: {
    id: number;
    title: string;
    alt: string;
    image: string | StaticImageData;
  };
}

export function PartnerItem({ stack }: User) {
  return (
    <div className="w-80 h-96 flex justify-center items-center border border-gray-300 rounded-md hover:shadow-md transition duration-300">
      <Image src={stack.image} alt={stack.alt} className="w-3/5" />
    </div>
  );
}
