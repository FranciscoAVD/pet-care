import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";

export default function Account() {
  return (
    <main>
      <H1 className="my-8">Your Account</H1>
      <ContentBlock className="h-[500px] flex items-center justify-center">Logged in as ...</ContentBlock>
    </main>
  );
}
