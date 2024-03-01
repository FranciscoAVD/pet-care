import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  
  return (
    <main className="min-h-screen bg-main flex flex-col lg:flex-row items-center justify-center gap-x-10">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        width={519}
        height={472}
        alt=""
      />
      <div>
        <Logo />
        <h1 className="text-5xl text-gray-100 my-6 max-w-[500px]">
          Manage your{" "}
          <span className="font-bold text-[#019587]">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl text-gray-800 font-medium max-w-[600px]">
          Use PetCare to easily keep track of pets under your care. Get lifetime
          access for $299.
        </p>
        <div className="mt-10 space-x-4">
          <Button asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/sign-in">Log in</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
