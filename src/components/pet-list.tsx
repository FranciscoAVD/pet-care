import { TPet } from "@/lib/types";
import Image from "next/image";

const placeholder = "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png";

export default function PetList({pets}:{pets: TPet[]}) {
  return (
    <ul className="bg-white border-b border-black/10">
      {pets.map(p => <Li key={p.id} imgSrc={p.imageUrl} petName={p.name}/>)}
    </ul>
  );
}

function Li({imgSrc, petName}:{
    imgSrc: string,
    petName: string
}) {
  return (
    <li>
      <button className="flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-x-3 hover:bg-[#eff1f2] focus:bg-[#eff1f2] transition">
        <Image
          src={imgSrc}
          alt="pet image"
          className="w-[45px] h-[45px] rounded-full object-cover"
          width={45}
          height={45}
        />
        <p className="font-semibold">{petName}</p>
      </button>
    </li>
  );
}
