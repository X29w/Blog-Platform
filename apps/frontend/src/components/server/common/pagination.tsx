import { calculatePageNumbers } from "@/utils/common/pagination";
import type { FC } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { cn } from "@/utils/common/tailwind";
import ConditionalRender from "@/components/general/ConditionalRender";
import RenderList from "@/components/general/RenderList";

interface PaginationProps extends CommonComponent {
  /** 总页码数 */
  totalPages: number;

  /** 当前页码 */
  currentPage: number;

  /** 页面左右两侧显示的页码数 */
  pageNeighbors?: number;
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  pageNeighbors = 2,
  className,
}) => {
  const pageNumbers = calculatePageNumbers({
    pageNeighbors,
    currentPage,
    totalPages,
  });
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {/* pervious page button */}
      <ConditionalRender condition={currentPage !== 1}>
        <button className={cn("rounded-md bg-slate-200 py-2 px-2")}>
          <Link href={`?page=${currentPage - 1}`}>
            <ChevronLeftIcon className="w-4" />
          </Link>
        </button>
      </ConditionalRender>
      <RenderList
        items={pageNumbers}
        renderItems={(item) => (
          <button
            className={cn(
              "px-3 py-1 rounded-md transition hover:text-sky-600",
              {
                "bg-slate-200": currentPage !== item && item !== "...",
                "bg-blue-500 text-white": currentPage === item,
                "cursor-not-allowed": item === "...",
              }
            )}
          >
            <ConditionalRender
              condition={item === "..."}
              fallback={<Link href={`?page=${item}`}>{item}</Link>}
            >
              ...
            </ConditionalRender>
          </button>
        )}
      />

      <ConditionalRender condition={currentPage !== totalPages}>
        <button className="rounded-md bg-slate-200 py-2 px-2">
          <Link href={`?page=${currentPage + 1}`}>
            <ChevronRightIcon className="w-4" />
          </Link>
        </button>
      </ConditionalRender>
      {/* next page button */}
    </div>
  );
};

export default Pagination;
