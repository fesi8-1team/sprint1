import HomeInfiniteScroll from "@/components/home/HomeInfiniteScroll";
import RegionSelect from "@/components/home/RegionSelect";
import DateSelect from "@/components/home/DateSelect";
import SortDateSelect from "@/components/home/SortDateSelect";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-h-auto min-h-screen w-screen bg-amber-300">
      <section className="m-auto max-h-auto min-h-screen max-w-7xl bg-amber-200 px-24 py-8">
        <div className="h-auto w-full bg-gray-300">
          <div className="flex h-20 w-full items-center justify-center bg-blue-400">
            <h1>지금 모임에 참여하세요!</h1>
          </div>
          <div className="relative flex h-20 w-full items-center bg-green-200">
            <Button className="ml-auto">모임 만들기</Button>
            <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/30">
              <div className="z-20 h-1/2 w-1/2 bg-white"></div>
            </div>
          </div>
        </div>
        <div className="flex h-14 items-center gap-2">
          <RegionSelect />
          <DateSelect />
          <SortDateSelect />
        </div>
        <HomeInfiniteScroll />
      </section>
    </div>
  );
}
