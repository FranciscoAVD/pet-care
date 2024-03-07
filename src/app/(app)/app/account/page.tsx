"use client";
import bulldog from "../../../../../public/bulldog.jpg";
import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";
import { useUser, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Account() {
  const { user } = useUser();
  return (
    <main>
      <div className="flex justify-between items-center">
        <H1 className="my-8">Your Account</H1>
        <div className="flex gap-x-2 items-center">
          <UserButton />
        </div>
      </div>

      <ContentBlock className="relative h-[500px] flex items-center justify-center bg-transparent">
        <div className="absolute h-full w-full image-gradient">
          <Image
            src={bulldog}
            alt="bulldog smiling in the background"
            className="absolute object-cover sm:object-contain w-auto h-full left-0 top-0 -z-[1]"
          />
        </div>
        <div className="relative z-10">
        Logged in as{" "}
        <span className="uppercase font-semibold block">{user?.username}</span>
        </div>
        
      </ContentBlock>
    </main>
  );
}
