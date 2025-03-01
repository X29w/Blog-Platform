import { DEFAULT_PAGE_SIZE } from "@/constant/config";

export const transformTakeSkip = ({
  page,
  pageSize,
}: Pagination) => {
  return {
    skip: ((page ?? 1) - 1) * (pageSize ?? DEFAULT_PAGE_SIZE),
    take: pageSize ?? DEFAULT_PAGE_SIZE,
  };
};
