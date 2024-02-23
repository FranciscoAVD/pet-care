export default function Stats({guests}:{guests:number}) {
  return (
    <section>
      <p className="text-2xl font-bold leading-6 text-white text-center">{guests}</p>
      <p className="opacity-50">current guests</p>
    </section>
  );
}
