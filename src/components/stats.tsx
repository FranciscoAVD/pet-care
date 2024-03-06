export default function Stats({guests}:{guests:number|undefined}) {
  
  return (
    <section>
      <p className="text-2xl font-bold leading-6 text-white text-center">{guests?guests:0}</p>
      <p className="opacity-50">current guests</p>
    </section>
  );
}
