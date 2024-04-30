import { useInfiniteQuery } from "@tanstack/react-query";
import { APIInstance } from "./service";

const useBlogListService = () => {
  const {
    data,
    error,
    isError,
    fetchNextPage,
    refetch,
    hasNextPage,
    isPending,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["BLOG_LIST"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await APIInstance({
        method: "GET",
        url: "/blog",
        params: {
          size: 10,
          page: pageParam,
        },
      });
      return {
        data:
          response?.data?.data?.map((item) => ({
            _id: item._id,
            title: item.title,
            description: item.description,
            imageUrl: item.imageUrl,
            blogUrl: item.blogUrl,
            createdAt: new Date(item.createdAt),
          })) || [],
        nextCursor: response?.data?.next_page || undefined,
        previousCursor: response?.data?.previous_page || undefined,
      };
    },
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nextCursor;
    },
  });

  return {
    ContentList: data?.pages?.map((group) => group?.data)?.flat() || [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
    isPending,
    refetch,
  };
};

export default useBlogListService;
