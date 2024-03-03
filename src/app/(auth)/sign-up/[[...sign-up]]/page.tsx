import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex justify-center items-center md:items-start h-screen md:pt-24 bg-gray-900">
      <SignUp />
    </main>
  );
}
