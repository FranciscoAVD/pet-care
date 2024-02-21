import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-accent flex flex-col lg:flex-row items-center justify-center gap-x-10">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        width={519}
        height={472}
        alt=""
      />
      <div>
        <h1 className="text-5xl text-main  my-6 max-w-[500px]">
          Manage your <span className="font-bold">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl text-[#e5e8ec] font-medium max-w-[600px]">Use PetCare to easily keep track of pets under your care. Get lifetime access for $299</p>
      </div>
    </main>
  );
}
