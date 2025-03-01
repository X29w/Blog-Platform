import { DEFAULT_PAGE_SIZE } from "@/constant/config";

/**
 * @name 获得分页参数
 * @description 获得分页参数
 * @param {Pagination} { page, pageSize }
 */
export const transformTakeSkip = ({ page, pageSize }: Pagination) => ({
  skip: ((page ?? 1) - 1) * (pageSize ?? DEFAULT_PAGE_SIZE),
  take: pageSize ?? DEFAULT_PAGE_SIZE,
});

interface ICalculatePageNumbersParams {
  pageNeighbors: number;
  totalPages: number;
  currentPage: number;
}

/**
 * @name 计算分页页码
 * @description 计算分页页码
 * @param {ICalculatePageNumbersParams} {
 *   pageNeighbors,
 *   totalPages,
 *   currentPage,
 * }
 * @return {*}
 */
export const calculatePageNumbers = ({
  pageNeighbors,
  totalPages,
  currentPage,
}: ICalculatePageNumbersParams) => {
  const totalNumbers = pageNeighbors * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, currentPage - pageNeighbors);
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);

    let pages: (number | string)[] = Array.from(
      {
        length: endPage - startPage + 1,
      },
      (_, i) => startPage + i
    );
    if (startPage > 2) pages = ["...", ...pages];
    if (endPage < totalPages - 1) pages = [...pages, "..."];
    return [1, ...pages, totalPages];
  }

  return Array.from({ length: totalPages }, (_, i) => i + 1);
};
