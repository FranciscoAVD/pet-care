import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  
  return (
    <main className="flex justify-center items-center md:items-start h-screen md:pt-24">
      <SignIn/>
    </main>
  );
}