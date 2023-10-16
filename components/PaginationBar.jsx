import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function PaginationBar({ href, page, pageCount }) {
  return (
    <div className="flex gap-2 pb-3 items-center">
      <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        <ChevronLeftIcon className="h-5 w-5" />
        <span className="sr-only">Previous Page</span>
      </PaginationLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        <ChevronRightIcon className="h-5 w-5" />
        <span className="sr-only">Next Page</span>
      </PaginationLink>
    </div>
  );
}

function PaginationLink({ href, children, enabled }) {
  if (!enabled) {
    return (
      <span className="border cursor-not-allowed rounded text-slate-300 text-sm">
        {children}
      </span>
    );
  }

  return (
    <Link
      className="border rounded text-sm hover:bg-orange-100 hover:text-slate-700"
      href={href}
    >
      {children}
    </Link>
  );
}
