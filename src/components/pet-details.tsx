import Image from "next/image";

export default function PetDetails() {
  return (
    <section className="h-full w-full text-white">
      <div className="flex items-center">
        <Image
          src=""
          alt="Pet Image"
          width={75}
          height={75}
          className="w-[75px] h-[75px] rounded-full object-cover"
        />
        <h2 className="text-3xl font-semibold leading-7 ml-5">
            Pet Name
        </h2>
      </div>
    </section>
  );
}
