import H1 from "./h1";

export default function Branding() {
  return (
    <section>
      <H1>
        Pet<span className="font-semibold text-accent">Care</span>
      </H1>
      <p className="opacity-50 w-[200px] sm:w-fit text-balance">Manage your pet daycare with ease</p>
    </section>
  );
}
