export default function HomeInfiniteScroll() {
  return (
    <div className="mt-6 flex flex-col gap-6">
      {Array.from({ length: 10 }).map((data, i) => {
        return <div className="h-[156px] w-full bg-white" key={i}></div>;
      })}
    </div>
  );
}
