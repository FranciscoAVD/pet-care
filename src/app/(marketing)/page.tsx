import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
export default function Home() {
  const { userId } = auth();
  return (
    <main className="min-h-screen bg-main px-10 flex gap-y-4 flex-col lg:flex-row items-center justify-center gap-x-10">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        width={519}
        height={472}
        alt=""
      />
      <div className="text-center">
        <Logo />
        <h1 className="text-5xl text-gray-100 mb-6 mt-4 max-w-[500px]">
          Manage your{" "}
          <span className="font-bold text-[#019587]">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl text-gray-800 font-medium max-w-[600px]">
          Use PetCare to easily keep track of pets under your care. Get lifetime
          access for $299.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href={userId ? "app/dashboard" : "/sign-in"}>Log in</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
