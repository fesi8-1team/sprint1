export default function Home() {
  let data = [];
  return (
    <div className="max-h-auto min-h-screen w-screen bg-amber-300">
      <section className="m-auto max-h-auto min-h-screen max-w-7xl bg-amber-200 px-24 py-8">
        <div className="h-60 w-full bg-gray-300"></div>
        <div className="mt-6 flex flex-col gap-6">
          {Array.from({ length: 10 }).map((data, i) => {
            return <div className="h-[156px] w-full bg-white" key={i}></div>;
          })}
        </div>
      </section>
    </div>
  );
}
