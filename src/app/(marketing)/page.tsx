import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import dashboard from "../../../public/Screenshot 2024-03-26 084400.png"
export default function Home() {
  const { userId } = auth();
  return (
    <main className="min-h-screen bg-main px-10 py-10 flex gap-y-4 flex-col lg:flex-row items-center justify-center gap-x-10">
      <Image
        src={dashboard}
        width={500}
        height={500}
        className="shadow-xl border-2 border-white/50 rounded-md"
        alt="Screenshot of PetCare dashboard"
        priority
      />
      <div className=" text-center ">
        <Logo />
        <h1 className="text-5xl text-gray-100 mb-6 mt-4 max-w-[500px]">
          Manage your{" "}
          <span className="font-bold text-[#019587]">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl text-gray-900/70 font-medium max-w-[600px]">
          Use PetCare to easily keep track of pets under your care. Get lifetime
          access for one easy payment of <span className="italic underline uppercase">free</span>.
        </p>
        <div className={cn("mt-10",{
          "space-x-4": userId === null
        })}>
          <Button asChild className={cn("",{
            "hidden": userId !== null
          })}>
            <Link href="/sign-up">Get Started</Link>
          </Button>
          <Button variant={userId ? "default" : "secondary"} asChild>
            <Link href={userId ? "app/dashboard" : "/sign-in"}>{userId ? "Dashboard" : "Log in"}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
