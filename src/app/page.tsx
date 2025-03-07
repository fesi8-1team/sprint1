import HomeInfiniteScroll from "@/components/home/HomeInfiniteScroll";
import RegionSelect from "@/components/home/RegionSelect";
import DateSelect from "@/components/home/DateSelect";
import SortDateSelect from "@/components/home/SortDateSelect";

export default function Home() {
  return (
    <div className="max-h-auto min-h-screen w-screen bg-amber-300">
      <section className="m-auto max-h-auto min-h-screen max-w-7xl bg-amber-200 px-24 py-8">
        <div className="h-60 w-full bg-gray-300"></div>
        <div className="flex h-14 items-center gap-2">
          <RegionSelect />
          <DateSelect />
          <div className="grow"></div>
          <SortDateSelect />
        </div>
        <HomeInfiniteScroll />
      </section>
    </div>
  );
}
