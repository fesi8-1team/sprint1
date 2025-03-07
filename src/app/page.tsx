import HomeInfiniteScroll from "@/components/HomeInfiniteScroll";

export default function Home() {
  let data = [];
  return (
    <div className="max-h-auto min-h-screen w-screen bg-amber-300">
      <section className="m-auto max-h-auto min-h-screen max-w-7xl bg-amber-200 px-24 py-8">
        <div className="h-60 w-full bg-gray-300"></div>
        <HomeInfiniteScroll />
      </section>
    </div>
  );
}
