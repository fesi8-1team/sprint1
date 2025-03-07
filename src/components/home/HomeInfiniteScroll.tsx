"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

export default function Home() {
  const handleGetArticle = async (page: number) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts", //임시 데이터
      );
      const data = await response.json();
      console.log("임시데이터", data);

      if (response.status === 200) {
        return data;
      } else if (response.status === 500) {
        alert(data.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: ({ pageParam = 1 }) => handleGetArticle(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) fetchNextPage();
  }, [isInView, fetchNextPage]);

  if (isLoading) return <p>로딩중입니다.</p>;
  return (
    <div className="mt-6 flex flex-col gap-6">
      {data?.pages.map((page) =>
        page?.map((post, index) => {
          return (
            <div className="h-[156px] w-full bg-white" key={index}>
              <h1>{post.id}</h1>
              <h2 className="font-bold">title: {post.title}</h2>
              <p>b{post.body}</p>
            </div>
          );
        }),
      )}
      <div className="h-1 w-full bg-red-300" ref={ref}></div>
    </div>
  );
}
